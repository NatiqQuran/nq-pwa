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
    SvgIcon,
} from "@yakad/ui";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Madineh } from "../../assets/svg/madineh - filled.svg";
import { ReactComponent as Makkah } from "../../assets/svg/makkah - filled.svg";

interface SuraItems {
    name: string;
    uuid: string;
    number: number;
    period: "makki" | "madani" | null;
    number_of_ayahs: number;
}

// const SuraLists: Array<SuraItems> = [
//     {
//         title: "الْفَاتِحَه",
//         description: "The Opener",
//         p: "Al-Fatihah",
//         url: "/quran/1",
//         image: 1,
//     },
//     {
//         title: "البَقَرَة",
//         description: "The Cow",
//         p: "Al-Baqarah",
//         url: "/quran/2",
//         image: 1,
//     },
//     {
//         title: "آل عِمرَان",
//         description: "Family of Imran",
//         p: "Ali 'Imran",
//         url: "/quran/3",
//         image: 0,
//     },
//     {
//         title: "النِّسَاء",
//         description: "The Women",
//         p: "An-Nisa",
//         url: "/quran/4",
//         image: 1,
//     },
//     {
//         title: "المَائدة",
//         description: "The Table Spread",
//         p: "Al-Ma'idah",
//         url: "/quran/5",
//         image: 1,
//     },

//     {
//         title: "الاٴنعَام",
//         description: "The Cattle",
//         p: "Al-An'am",
//         url: "/quran/6",
//         image: 1,
//     },
// ];

const SurahPeriodIcon = (props: { period: "makki" | "madani" | null }) =>
    props.period ? (
        <SvgIcon>{props.period === "makki" ? <Makkah /> : <Madineh />}</SvgIcon>
    ) : null;

function Search() {
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
                        width: "100%",
                        color: "inherit",
                    }}
                    type="Search"
                    placeholder="Search Sura, Phrase or numbers(Sura:Aya, Page, Juz, Hizb)"
                />
                <Button
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Cancel
                </Button>
            </AppBar>
            <Main>
                <Container maxWidth="md">
                    <h2 style={{ fontSize: "4rem" }}>Surahs List</h2>
                    <Hr />
                    <GridContainer>
                        {fetch.isResponseBodyReady ? (
                            fetch.responseBody.map((item, _index) => (
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
                            ))
                        ) : (
                            <Loading size="large" style={{ margin: "auto" }} />
                        )}
                    </GridContainer>
                </Container>
            </Main>
        </Page>
    );
}

export default Search;
