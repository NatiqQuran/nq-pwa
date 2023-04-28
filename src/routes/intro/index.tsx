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
import { ReactComponent as LogoIcon } from "../../assets/svg/logoicon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import Xintro from "./Xintro";
import styles from "./intro.module.css";

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
        <Page>
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
            <Main>
                <Xintro logo={<LogoIcon />} >
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
                    <p
                        style={{
                            fontSize: "1.8rem",
                            textAlign: "center",
                        }}
                    >
                        Natiq Quran, Multi mushaf easy to use quran app.
                        <br />
                        research and translate based.
                    </p>
                    <Link to="./quran/1">
                        <Button variant="filled" size="medium" style={{ margin: "auto" }}>
                            GET START
                        </Button>
                    </Link>
                    <p style={{ fontSize: "1.4rem" }}>or</p>
                    <Link to="https://blog.natiq.net" target="_blank" style={{ fontSize: "1.6rem" }}>
                        Learn More!
                    </Link>
                </Xintro>
            </Main>
            <Navigation anchor="top" open={navOpen}>
                <List direction="column" style={{ padding: "0 2rem" }}>
                    {navListItems.map(item => item)}
                </List>
            </Navigation>
        </Page>
    );
}

export default Intro;
