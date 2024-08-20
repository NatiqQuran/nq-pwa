import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { SurahInListProps } from "assets/ts/interface";

export default function Search() {
    return (
        <Page>
            <SearchAppBar />
            <SearchMain />
        </Page>
    );
}

function SearchAppBar() {
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

function SearchMain() {
    const surahList = useFetch<SurahInListProps[]>(
        `${process.env.REACT_APP_API_URL}/surah?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahList.send();
    }, []);

    return (
        <Main>
            <Container maxWidth="md" style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "0", fontSize: "4rem" }}>
                    Surahs List
                </h2>
                <Hr marginTopBottom={2} />
                {surahList.isResponseBodyReady ? (
                    <GridContainer>
                        {surahList.responseBody.map((surah) => (
                            <GridItem xl={4} md={6} xs={12}>
                                <SurahLinkBox surah={surah} />
                            </GridItem>
                        ))}
                    </GridContainer>
                ) : (
                    <Loading size="large" />
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
                                {props.surah.name}
                            </span>
                            <SurahPeriodIcon period={props.surah.period} />
                        </Row>
                    </Stack>
                </Row>
            </Card>
        </Link>
    );
}
