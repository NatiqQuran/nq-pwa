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
} from "@yakad/ui";

import surahListJson from "assets/json/surahList.json";
import { SurahPeriodIcon } from "components/surahPeriodIcon";

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

export default function Search() {
    const surahList: SurahListResponseData =
        surahListJson as SurahListResponseData;

    const [filteredSurahList, setFilteredSurahList] =
        useState<SurahListResponseData>(filterSurahsByString(surahList, ""));

    const filterBySearchInputHandler = (searchValue: string) => {
        setFilteredSurahList(filterSurahsByString(surahList, searchValue));
    };

    return (
        <>
            <SearchBar onSearch={filterBySearchInputHandler} />
            <SearchMain surahList={filteredSurahList} />
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

const SearchMain = (props: { surahList: SurahListResponseData }) => (
    <Container size="md" style={{ marginBottom: "2rem", minHeight: "90vh" }}>
        <h2 style={{ marginBottom: "0", fontSize: "3.4rem" }}>Surahs List</h2>
        <Hr margintopbottom={2} />
        {props.surahList.length === 0 ? (
            <h2 style={{ margin: "2rem auto", textAlign: "center" }}>
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
