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
    ayahs: Verse[];
}

function Quran() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");
    const toggleNavOpen = () => setNavOpen(value => !value);
    const { id } = useParams();
    const surahFetch = useFetch<Surah[]>(
        process.env.REACT_APP_API_URL +
            `/quran?from=${id}&limit=${id}&mushaf=hafs&format=ayah`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahFetch.send();
    }, []);

    return (
        <Page>
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
                        <h1 style={{ textAlign: "center", fontFamily: "hafs" }}>
                            {" "}
                            {surahFetch.responseBody[0].name}
                        </h1>

                        <Stack>
                            <Card
                                style={{
                                    fontSize: "2rem",
                                    lineHeight: "4rem",
                                    fontFamily: "hafs",
                                    textAlign: "justify",
                                }}
                            >
                                {surahFetch.responseBody[0].ayahs.map(ayah => (
                                    <span>
                                        {ayah.content.text}{" "}
                                        <span>[[{ayah.number}]] </span>
                                    </span>
                                ))}
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
