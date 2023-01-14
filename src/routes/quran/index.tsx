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

interface Verse {
    verse: number;
    text: string;
}

interface Surah {
    id: number;
    name: string;
    period: string;
    verses: Verse[];
}

function Quran() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");
    const toggleNavOpen = () => setNavOpen(value => !value);
    const { id } = useParams();
    const surahFetch = useFetch<Surah>(
        process.env.REACT_APP_API_URL + `/quran?from=${id}&to=${id}`,
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
                        <h1>{surahFetch.responseBody.name}</h1>

                        <Stack>
                            {surahFetch.responseBody.verses.map(verse => (
                                <Card>
                                    {verse.verse}. {verse.text}
                                </Card>
                            ))}
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
