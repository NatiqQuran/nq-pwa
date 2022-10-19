import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch, useMedia } from "library";
import {
    Navigation,
    ClickAwayListener,
    List,
    ListItem,
    ListItemButton,
    AppBar,
    Button,
    SvgIcon,
    Main,
    Page,
    Spacer,
    Container,
    Card,
    Stack,
} from "ui";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

const NavigationList = () => (
    <List>
        <ListItem>
            <ListItemButton>Contact Us</ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>About Natiq</ListItemButton>
        </ListItem>
    </List>
);

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
    const toggleNavOpen = () => setNavOpen((value) => !value);
    const { id } = useParams();
    const surahFetch = useFetch<Surah>(
        process.env.REACT_APP_API_URL + `/quran/${id}`,
        {
            method: "GET",
        }
    );

    useEffect(() => {
        surahFetch.send();
    }, []);

    return (
        <Page>
            <AppBar>
                <Button
                    icon={<Menu />}
                    onClick={toggleNavOpen}
                    variant="outlined"
                />
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
                            {surahFetch.responseBody.verses.map((verse) => (
                                <Card>
                                    {verse.verse}. {verse.text}
                                </Card>
                            ))}
                        </Stack>
                    </Container>
                )}
            </Main>

            {matches ? (
                <ClickAwayListener onClickAway={() => setNavOpen(false)}>
                    <Navigation open={navOpen}>
                        <NavigationList />
                    </Navigation>
                </ClickAwayListener>
            ) : (
                <Navigation open={navOpen}>
                    <NavigationList />
                </Navigation>
            )}
        </Page>
    );
}

export default Quran;
