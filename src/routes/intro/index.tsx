import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch, useMedia } from "@yakad/lib";

import {
    AppBar,
    Main,
    Page,
    Spacer,
    Button,
    Container,
    GridContainer,
    GridItem,
    SvgIcon,
    Stack,
    Footer,
    Navigation,
    List,
    ListItem,
} from "@yakad/ui";
import styles from "./intro.module.css";
import { ReactComponent as LogoIcon } from "../../assets/svg/logoicon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import IntroSurah from "./introSurah";

const navListItems: Array<React.ReactElement> = [
    <ListItem>
        <Link to="quran">
            <Button style={{ width: "100%" }}>Quran</Button>
        </Link>
    </ListItem>,
    <ListItem>
        <a href="https://blog.natiq.net" target="_blank">
            <Button style={{ width: "100%" }}>About</Button>
        </a>
    </ListItem>,
];

function Intro() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");
    const toggleNavOpen = () => setNavOpen(value => !value);

    return (
        <Page className={styles.page}>
            <AppBar style={{ gap: "1rem" }}>
                <SvgIcon size={5}>
                    <LogoIcon />
                </SvgIcon>
                <h1 style={{ fontFamily: "arial", fontSize: "2.4rem", fontWeight: "normal", letterSpacing: "0.1rem" }}>Natiq</h1>
                <List className={styles.appbar}>
                    {navListItems.map(item => item)}
                </List>
                <Spacer />
                <Link to="/search">
                    <Button variant="outlined" icon={<SearchIcon />}>
                        Search
                    </Button>
                </Link>
            </AppBar>
            <Main style={{ padding: "5rem 0" }}>
                <GetStart />
            </Main>
            <Navigation anchor="top" open={navOpen}>
                <List direction="column" style={{ padding: "0 2rem" }}>
                    {navListItems.map(item => item)}
                </List>
            </Navigation>
        </Page>
    );
}

function GetStart() {
    return (
        <Container maxWidth="lg">
            <GridContainer className={styles.grid}>
                <GridItem md={12} xl={5} style={{
                    alignItems: "center"
                }}>
                    <SvgIcon style={{ maxWidth: "40rem", margin: "auto" }}>
                        <LogoIcon />
                    </SvgIcon>
                    <div>
                        <h1
                            style={{
                                fontFamily: "Hafs",
                                textAlign: "center"
                            }}
                        >
                            <span style={{
                                fontSize: "7rem"
                            }}>الْقُرآنُ </span>
                            <span style={{ fontSize: "7.7rem", color: "#aa8a59" }}>
                                النّاطِق
                            </span>
                        </h1>
                    </div>
                </GridItem>
                <GridItem
                    md={12}
                    xl={7}
                    style={{
                        alignItems: "center",
                        display: "flex",
                        padding: "0 2rem",
                    }}
                >
                    <Stack style={{ width: "100%", alignItems: "center" }}>
                        <IntroSurah />
                        <p
                            style={{
                                textAlign: "justify",
                                textAlignLast: "center",
                                fontSize: "1.6rem",
                                lineHeight: "2rem",
                            }}
                        >
                            In the name of Allah, the beneficent the compassionate
                        </p>
                        <Link to="./quran/1">
                            <Button variant="filled" size="large">
                                GET START
                            </Button>
                        </Link>
                    </Stack>
                </GridItem>
            </GridContainer>
        </Container>
    );
}

export default Intro;
