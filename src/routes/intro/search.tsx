import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SurahListResponseData, ControllerSurah } from "@ntq/sdk";
import {
    Container,
    Hr,
    GridContainer,
    GridItem,
    Card,
    Row,
    Spacer,
    Stack,
    Loading,
} from "@yakad/ui";

import { SurahPeriodIcon } from "components/surahPeriodIcon";
import { ConnectionContext } from "contexts";

function digitsToEnglish(str: string): string {
    // Detect all Persian/Arabic Digit in range of their Unicode with a global RegEx character set
    // Remove the Unicode base(2) range that not match
    return str.replace(
        /[\u0660-\u0669\u06f0-\u06f9]/g,
        (char: string): string => (char.charCodeAt(0) & 0xf).toString()
    );
}

function filterSurahsByString(
    surahList: SurahListResponseData,
    searchValue: string
): SurahListResponseData {
    return searchValue !== ""
        ? surahList.filter((surah) => {
              const newSurah = {
                  number: surah.number,
                  names: surah.names,
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
    const [surahList, setSurahList] = useState<SurahListResponseData | null>(
        null
    );
    const [filteredSurahList, setFilteredSurahList] =
        useState<SurahListResponseData>([]);
    const conn = useContext(ConnectionContext);
    const [searchInput, setSearchInput] = useState<string>("");

    useEffect(() => {
        new ControllerSurah(conn!)
            .list({ params: { mushaf: "hafs" } })
            .then((response) => {
                setSurahList(response.data);
                setFilteredSurahList(
                    filterSurahsByString(surahList, searchInput)
                );
            });
    }, [surahList, searchInput]);

    const filterBySearchInputHandler = (searchValue: string) => {
        setSearchInput(searchValue);
        if (surahList)
            setFilteredSurahList(
                filterSurahsByString(surahList, digitsToEnglish(searchValue))
            );
    };

    return (
        <>
            <SearchBar onSearch={filterBySearchInputHandler} />
            <SearchMain
                loading={!surahList || !filteredSurahList}
                surahList={filteredSurahList}
            />
        </>
    );
}

const SearchBar = (props: { onSearch: any }) => (
    <Container size="md">
        <input
            style={{
                boxSizing: "border-box",
                background: "#7d7d7d15",
                width: "100%",
                height: "6rem",
                padding: "2rem",
                margin: "4rem 0 2rem",
                border: "0.1rem solid #7d7d7d",
                borderRadius: "3rem",
                fontSize: "1.6rem",
                color: "inherit",
            }}
            type="Search"
            placeholder="Search Surah by Name or Number"
            onChange={(e) => props.onSearch(e.target.value)}
        />
    </Container>
);

const SearchMain = (props: {
    loading: boolean;
    surahList: SurahListResponseData;
}) => (
    <Container size="md" style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0", fontSize: "3.4rem" }}>Surahs List</h2>
        <Hr margintopbottom={2} />
        {props.loading ? (
            <Loading size="large" />
        ) : props.surahList.length === 0 ? (
            <div style={{ margin: "auto" }}>
                <h2 style={{ textAlign: "center" }}>No Search Result</h2>
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
);

const SurahLinkBox = (props: { surah: SurahListResponseData[0] }) => (
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
                            {props.surah.names[0].arabic}
                        </span>
                        <SurahPeriodIcon period={props.surah.period} />
                    </Row>
                </Stack>
            </Row>
        </Card>
    </Link>
);
