import React, { useEffect, useState } from "react";
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
    Card,
    Stack,
} from "@yakad/ui";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import NavigationList from "./navigationList";
import InputField from "inputField /inputField";

interface Verse {
    number: number;
    content: {
        text: string;
    };
}

interface Surah {
    id: number;
    name: string;
    period: string;
    bismillah_status: "in_ayah" | "true" | "false";
    bismillah_text: string | null;

    ayahs: Verse[];
}

const Ayah = (props: { ayah: Verse }) => (
    <span>
        {props.ayah.content.text}
        <span> {toArabic(props.ayah.number)} </span>
    </span>
);

const toArabic = (input: any) => input.toLocaleString("ar-EG");

function Quran() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");
    const toggleNavOpen = () => setNavOpen(value => !value);
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
                <Button icon={<Menu />} onClick={toggleNavOpen} />
                <h1>Quran</h1>
                <Spacer />
                <Link to="/search">
                    <Button icon={<SearchIcon />} />
                </Link>
            </AppBar>

            <Main navOpen={navOpen}>
                {!surahFetch.isResponseBodyReady ? (
                    "loading..."
                ) : (
                    <Container
                        maxWidth="md"
                        dir="rtl"
                        style={{ padding: "5px" }}
                    >
                        <span
                            style={{
                                textAlign: "center",
                                fontFamily: "hafs",
                                fontSize: "3rem",
                            }}
                        >
                            <h4>
                                {surahFetch.responseBody.name}
                                {surahFetch.responseBody.id}
                            </h4>
                            <h2>
                                {surahFetch.responseBody.bismillah_status ===
                                "in_ayah"
                                    ? `${
                                          surahFetch.responseBody.ayahs[0]
                                              .content.text
                                      }${toArabic(
                                          surahFetch.responseBody.ayahs[0]
                                              .number
                                      )}`
                                    : surahFetch.responseBody
                                          .bismillah_status === "true"
                                    ? `${surahFetch.responseBody.bismillah_text}`
                                    : ""}
                            </h2>
                        </span>

                        <Stack>
                            <Card
                                style={{
                                    fontSize: "2.4rem",
                                    lineHeight: "4rem",
                                    fontFamily: "hafs",
                                    textAlign: "justify",
                                }}
                            >
                                {surahFetch.responseBody.bismillah_status ===
                                "in_ayah"
                                    ? surahFetch.responseBody.ayahs
                                          .slice(1)
                                          .map(ayah => <Ayah ayah={ayah} />)
                                    : surahFetch.responseBody.ayahs.map(
                                          ayah => <Ayah ayah={ayah} />
                                      )}
                            </Card>
                        </Stack>
                    </Container>
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
