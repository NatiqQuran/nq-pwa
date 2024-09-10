import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SurahInListProps } from "@ntq/sdk/type";
import { useFetch } from "@yakad/lib";
import {
    Page,
    Main,
    Container,
    Hr,
    AppBar,
    Button,
    GridContainer,
    GridItem,
    Card,
    Row,
    Spacer,
    Stack,
    Loading,
} from "@yakad/ui";

import { SurahPeriodIcon } from "components/SurahPeriodIcon";

function digitsToEnglish(str: string): string {
    // Detect all Persian/Arabic Digit in range of their Unicode with a global RegEx character set
    // Remove the Unicode base(2) range that not match
    return str.replace(
        /[\u0660-\u0669\u06f0-\u06f9]/g,
        (char: string): string => (char.charCodeAt(0) & 0xf).toString()
    );
}

function filterSurahsByString(
    surahList: SurahInListProps[],
    searchValue: string
): SurahInListProps[] {
    return searchValue !== ""
        ? surahList.filter((surah) => {
              const newSurah = {
                  number: surah.number,
                  name: surah.name,
                  period: surah.period,
              };
              return Object.values(newSurah)
                  .join("")
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
          })
        : surahList;
}

export default function Search() {
    const surahList = useFetch<SurahInListProps[]>(
        `${process.env.REACT_APP_API_URL}/surah?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahList.send();
    }, []);
    useEffect(() => {
        if (surahList.isResponseBodyReady) {
            setFilteredResults(
                filterSurahsByString(surahList.responseBody, "")
            );
        }
    }, [surahList.isResponseBodyReady]);

    const [searchInput, setSearchInput] = useState<string>("");
    const [filteredResults, setFilteredResults] = useState<
        Array<SurahInListProps>
    >([]);

    const filterBySearchHandler = (searchValue: string) => {
        setSearchInput(searchValue);
        const filteredData = filterSurahsByString(
            surahList.responseBody,
            digitsToEnglish(searchValue)
        );
        setFilteredResults(filteredData);
    };

    return (
        <Page>
            <SearchAppBar onSearch={filterBySearchHandler} />
            <SearchMain
                searchInput={searchInput}
                loading={!surahList.isResponseBodyReady || !filteredResults}
                surahList={filteredResults}
            />
        </Page>
    );
}

function SearchAppBar(props: { onSearch: any }) {
    const navigate = useNavigate();

    return (
        <AppBar>
            <input
                style={{
                    background: "#7d7d7d15",
                    width: "calc(100% - 12rem)",
                    height: "4rem",
                    padding: "0 2rem",
                    color: "inherit",
                }}
                type="Search"
                placeholder="Search Sura by Name or Number"
                onChange={(e) => props.onSearch(e.target.value)}
            />
            <Spacer />
            <Button
                onClick={() => {
                    navigate(-1);
                }}
            >
                Cancel
            </Button>
        </AppBar>
    );
}

function SearchMain(props: {
    searchInput: string;
    loading: boolean;
    surahList: SurahInListProps[];
}) {
    return (
        <Main>
            <Container maxWidth="md" style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "0", fontSize: "4rem" }}>
                    Surahs List
                </h2>
                <Hr marginTopBottom={2} />
                {props.loading ? (
                    <Loading size="large" />
                ) : props.surahList.length === 0 ? (
                    <div style={{ margin: "auto" }}>
                        <h3 style={{ textAlign: "center" }}>
                            Searching: {props.searchInput}
                        </h3>
                        <h2 style={{ textAlign: "center" }}>Not Found</h2>
                    </div>
                ) : (
                    <GridContainer>
                        {props.surahList.map((surah) => (
                            <GridItem xl={4} md={6} xs={12}>
                                <SurahLinkBox surah={surah} />
                            </GridItem>
                        ))}
                    </GridContainer>
                )}
            </Container>
        </Main>
    );
}

function SurahLinkBox(props: { surah: SurahInListProps }) {
    return (
        <Link to={`/quran/${props.surah.uuid}`}>
            <Card>
                <Row>
                    <span
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "2rem",
                            fontWeight: "bold",
                        }}
                    >
                        {props.surah.number}
                    </span>
                    <Spacer />
                    <Stack style={{ gap: "0" }}>
                        <Row>
                            <span
                                style={{
                                    fontFamily: "hafs",
                                    fontSize: "2.5rem",
                                    fontWeight: "bold",
                                }}
                            >
                                {props.surah.name[0].arabic}
                            </span>
                            <SurahPeriodIcon period={props.surah.period} />
                        </Row>
                    </Stack>
                </Row>
            </Card>
        </Link>
    );
}
