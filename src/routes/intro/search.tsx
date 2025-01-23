import { useState } from "react";
import { Link } from "react-router-dom";
import { SurahListResponseData } from "@ntq/sdk";
import {
    Container,
    GridContainer,
    GridItem,
    Card,
    Row,
    Spacer,
    Stack,
    Hr,
    Button,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

import { SurahPeriodIcon } from "components/surahPeriodIcon";
import { RandomSurahButton } from "components/randomSurahButton";
import { GoToSurahButton } from "components/goToSurahButton";

function scrollTo(id: string): void {
    document.getElementById(id)!.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
}
export const JumpToSearchBarButton = () => (
    <Button
        variant="filledtonal"
        onClick={() => {
            document.getElementById("searchInput")!.focus();
            scrollTo("searchContainer");
        }}
        icon={<Symbol icon="search" />}
    >
        Search
    </Button>
);

function digitsToEnglish(str: string): string {
    // Detect all Persian/Arabic Digit in range of their Unicode with a global RegEx character set
    // Remove the Unicode base(2) range that not match
    return str.replace(
        /[\u0660-\u0669\u06f0-\u06f9]/g,
        (char: string): string => (char.charCodeAt(0) & 0xf).toString()
    );
}

function searchAble(str: string): string {
    return digitsToEnglish(
        str
            .toLowerCase()
            .replace("ة", "ه")
            .replace("ؤ", "و")
            .replace("آ", "ا")
            .replace("أ", "ا")
            .replace("أ", "ا")
            .replace("إ", "ا")
            .replace("ي", "ی")
            .replace("ئ", "ی")
            .replace("ك", "ک")
    );
}

function arrayOfObjectsToString(arrayOfObjects: object[]): string {
    const arrayOfJoinedObjects: string[] = arrayOfObjects.map((obj) =>
        Object.values(obj).join(" ")
    ); //join objects values
    return arrayOfJoinedObjects.join(" "); //join array items
}

function filterSurahsByString(
    surahList: SurahListResponseData,
    searchValue: string
): SurahListResponseData {
    if (!searchValue) return surahList;

    const searchAbleValue: string = searchAble(searchValue);

    return surahList.filter((surah) => {
        const newSurah = {
            number: surah.number,
            names: arrayOfObjectsToString(surah.names),
            period: surah.period,
        };
        const searchableString: string = searchAble(
            Object.values(newSurah).join(" ")
        );

        return searchableString.includes(searchAbleValue);
    });
}

export default function Search(props: { surahList: SurahListResponseData }) {
    const [filteredSurahList, setFilteredSurahList] =
        useState<SurahListResponseData>(
            filterSurahsByString(props.surahList, "")
        );

    const [isSearching, setIsSearching] = useState<boolean>(false);

    const filterBySearchInputHandler = (searchValue: string) => {
        setIsSearching(searchValue ? true : false);
        setFilteredSurahList(
            filterSurahsByString(props.surahList, searchValue)
        );
    };

    return (
        <Container size="md" id="searchContainer" style={{ marginTop: "2rem" }}>
            <SearchBar onSearch={filterBySearchInputHandler} />
            {!isSearching && <RelatedSurahs surahList={props.surahList} />}
            <SearchResault surahList={filteredSurahList} />
        </Container>
    );
}

const SearchBar = (props: { onSearch: any }) => (
    <Row
        id="searchBar"
        style={{
            position: "sticky",
            top: "0",
            zIndex: "1",
        }}
    >
        <div
            style={{
                width: "100%",
                backgroundColor: "rgb(var(--surfaceColor, 254 247 255))",
                borderRadius: "0 0 3rem 3rem",
            }}
        >
            <input
                id="searchInput"
                style={{
                    boxSizing: "border-box",
                    width: "100%",
                    height: "6rem",
                    padding: "3rem",
                    margin: "2rem 0 0",
                    border: "0.1rem solid #7d7d7d7d",
                    boxShadow: "0 0 0.4rem #7d7d7d7d",
                    borderRadius: "3rem",
                    fontSize: "1.6rem",
                    backgroundColor:
                        "rgb(var(--surfaceContainerColor, 243 237 247))",
                    color: "inherit",
                }}
                type="Search"
                placeholder="Search Surah by Name or Number"
                onClick={() => {
                    scrollTo("searchBar");
                }}
                onChange={(e) => {
                    scrollTo("searchContainer");
                    props.onSearch(e.target.value);
                }}
            />
        </div>
    </Row>
);

const RelatedSurahs = (props: { surahList: SurahListResponseData }) => (
    <Row style={{ flexWrap: "wrap", marginTop: "2rem" }}>
        <RandomSurahButton surahList={props.surahList} />
        <GoToSurahButton surahList={props.surahList} surahNumber={55} />
        <GoToSurahButton surahList={props.surahList} surahNumber={36} />
        <GoToSurahButton surahList={props.surahList} surahNumber={48} />
    </Row>
);

const SearchResault = (props: { surahList: SurahListResponseData }) => (
    <div
        style={{
            width: "100%",
            minHeight: "calc(100vh - 16rem)",
            marginBottom: "2rem",
        }}
    >
        <h2 style={{ marginBottom: "0", fontSize: "3.4rem" }}>Surahs List</h2>
        <Hr margintopbottom={2} />
        {props.surahList.length === 0 ? (
            <h2 style={{ margin: "5rem auto", textAlign: "center" }}>
                No Search Result
            </h2>
        ) : (
            <GridContainer>
                {props.surahList.map((surah) => (
                    <GridItem xl={4} md={6} xs={12}>
                        <SurahLinkBox surah={surah} />
                    </GridItem>
                ))}
            </GridContainer>
        )}
    </div>
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
