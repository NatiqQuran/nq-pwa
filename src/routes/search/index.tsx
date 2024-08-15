import { useFetch } from "@yakad/lib";
import { useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { SurahPeriodIcon } from "components/SurahPeriodIcon";

interface SuraItems {
    name: string;
    uuid: string;
    number: number;
    period: "makki" | "madani" | null;
    number_of_ayahs: number;
}

export default function Search() {
    const navigate = useNavigate();
    const fetch = useFetch<SuraItems[]>(
        `${process.env.REACT_APP_API_URL}/surah?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        fetch.send();
    }, []);

    return (
        <Page>
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
            <Main>
                <Container maxWidth="md" style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "0", fontSize: "4rem" }}>
                        Surahs List
                    </h2>
                    <Hr marginTopBottom={2} />
                    {fetch.isResponseBodyReady ? (
                        <GridContainer>
                            {fetch.responseBody.map((item, _index) => (
                                <GridItem xl={4} md={6} xs={12}>
                                    <Link to={`/quran/${item.uuid}`}>
                                        <Card>
                                            <Row>
                                                <span
                                                    style={{
                                                        fontFamily:
                                                            "sans-serif",
                                                        fontSize: "2rem",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item.number}
                                                </span>
                                                <Spacer />
                                                <Stack style={{ gap: "0" }}>
                                                    <Row>
                                                        <span
                                                            style={{
                                                                fontFamily:
                                                                    "hafs",
                                                                fontSize:
                                                                    "2.5rem",
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        >
                                                            {item.name}
                                                        </span>
                                                        <SurahPeriodIcon
                                                            period={item.period}
                                                        />
                                                    </Row>
                                                </Stack>
                                            </Row>
                                        </Card>
                                    </Link>
                                </GridItem>
                            ))}
                        </GridContainer>
                    ) : (
                        <Loading size="large" />
                    )}
                </Container>
            </Main>
        </Page>
    );
}
