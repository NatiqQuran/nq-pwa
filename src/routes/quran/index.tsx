import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch, useMedia } from "@yakad/lib";
import {
    Navigation,
    AppBar,
    Button,
    Main,
    Page,
    Spacer,
    Container,
    Stack,
    GridContainer,
    GridItem,
    Row,
} from "@yakad/ui";
import { ReactComponent as Madineh } from "../../assets/svg/madineh - filled.svg";

import NavigationList from "./navigationList";

interface Verse {
    number: number;
    content: {
        text: string;
    };
}

interface Surah {
    surah_uuid: string;
    surah_name: string;
    surah_period: string | null;
    surah_number: number;

    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    bismillah_text: string | null;

    ayahs: Verse[];
}

const Ayah = (props: { ayah: Verse }) => (
    <span>
        {props.ayah.content.text}
        <span> ﴿{toArabic(props.ayah.number)}﴾ </span>
    </span>
);

const toArabic = (input: any) => input.toLocaleString("ar-EG");

function Quran() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");
    const toggleNavOpen = () => setNavOpen((value) => !value);
    const { id } = useParams();
    const surahFetch = useFetch<Surah>(
        process.env.REACT_APP_API_URL + `/surah/${id}?mushaf=hafs`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahFetch.send();
    }, []);

    return (
        <Page style={{ minHeight: "100vh" }}>
            <AppBar style={{ gap: "0" }}>
                <Button icon="menu" onClick={toggleNavOpen} />
                <h1>Quran</h1>
                <Spacer />
                <Link to="/search">
                    <Button icon="search" />
                </Link>
            </AppBar>

            <Main navOpen={navOpen}>
                {!surahFetch.isResponseBodyReady ? (
                    "loading..."
                ) : (
                    <GridContainer>
                        <GridItem xl={12}>
                            <Container
                                maxWidth="sm"
                                style={{
                                    justifyContent: "center",
                                    padding: "2rem",
                                }}
                            >
                                <Stack
                                    style={{
                                        fontFamily: "hafs",
                                        fontSize: "3rem",
                                        width: "100%",
                                        gap: "0",
                                    }}
                                >
                                    <Row>
                                        <span style={{ fontSize: "2rem" }}>
                                            Number:
                                            {
                                                surahFetch.responseBody
                                                    .surah_number
                                            }
                                        </span>
                                        <Spacer />
                                        <h3>
                                            {surahFetch.responseBody.surah_name}
                                        </h3>
                                    </Row>
                                    <h3
                                        style={{
                                            textAlign: "center",
                                            direction: "rtl",
                                        }}
                                    >
                                        {surahFetch.responseBody
                                            .bismillah_as_first_ayah
                                            ? `${surahFetch.responseBody
                                                .ayahs[0].content.text
                                            } ﴿${toArabic(
                                                surahFetch.responseBody
                                                    .ayahs[0].number
                                            )}﴾`
                                            : surahFetch.responseBody
                                                .bismillah_status
                                                ? `${surahFetch.responseBody.bismillah_text}`
                                                : ""}
                                    </h3>
                                </Stack>
                            </Container>
                        </GridItem>
                        <GridItem xl={12}>
                            <Container
                                maxWidth="md"
                                dir="rtl"
                                style={{ padding: "0.5rem" }}
                            >
                                <Stack>
                                    <span
                                        style={{
                                            fontSize: "2.5rem",
                                            lineHeight: "5rem",
                                            fontFamily: "hafs",
                                            textAlign: "justify",
                                        }}
                                    >
                                        {surahFetch.responseBody
                                            .bismillah_as_first_ayah
                                            ? surahFetch.responseBody.ayahs
                                                .slice(1)
                                                .map((ayah) => (
                                                    <Ayah ayah={ayah} />
                                                ))
                                            : surahFetch.responseBody.ayahs.map(
                                                (ayah) => <Ayah ayah={ayah} />
                                            )}
                                    </span>
                                </Stack>
                            </Container>
                        </GridItem>
                    </GridContainer>
                )}
            </Main>

            {matches ? (
                <Navigation open={navOpen}>
                    <NavigationList />
                </Navigation>
            ) : (
                <Navigation open={navOpen}>
                    <NavigationList />
                </Navigation>
            )}
        </Page>
    );
}

export default Quran;
