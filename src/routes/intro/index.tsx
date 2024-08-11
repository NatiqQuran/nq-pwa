import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMedia } from "@yakad/lib";

import {
    AppBar,
    Main,
    Page,
    Spacer,
    Button,
    SvgIcon,
    Navigation,
    List,
    ListItem,
} from "@yakad/ui";
import { Xbackground, XgetStart } from "@yakad/x";
import { ReactComponent as LogoIcon } from "../../assets/svg/logoicon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import styles from "./intro.module.css";
import Symbol from "@yakad/symbols";

const navListItems: Array<React.ReactElement> = [
    <ListItem>
        <Link to="search">
            <Button style={{ width: "100%" }}>Quran</Button>
        </Link>
    </ListItem>,
    <ListItem>
        <a href="https://blog.natiq.net/about" target="_blank">
            <Button style={{ width: "100%" }}>About</Button>
        </a>
    </ListItem>,
];

export default function Intro() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");

    return (
        <Page>
            <AppBar>
                <SvgIcon size={5}>
                    <LogoIcon />
                </SvgIcon>
                <h1
                    style={{
                        fontFamily: "arial",
                        fontSize: "2.4rem",
                        fontWeight: "normal",
                        letterSpacing: "0.1rem",
                    }}
                >
                    Natiq
                </h1>
                <List className={styles.appbar}>
                    {navListItems.map((item) => item)}
                </List>
                <Spacer />
                <Link to="/search">
                    <Button variant="outlined" icon={<Symbol icon="search" />}>
                        Search
                    </Button>
                </Link>
            </AppBar>
            <Main>
                <Xbackground variant="dotted">
                    <XgetStart logo={<LogoIcon />}>
                        <IntroDialogBox />
                    </XgetStart>
                </Xbackground>
            </Main>
            <Navigation anchor="top" open={navOpen}>
                <List direction="column" style={{ padding: "0 2rem" }}>
                    {navListItems.map((item) => item)}
                </List>
            </Navigation>
        </Page>
    );
}

export function IntroDialogBox() {
    return (
        <>
            <h1
                style={{
                    fontFamily: "Hafs",
                    textAlign: "center",
                    margin: "0",
                }}
            >
                <span
                    style={{
                        fontSize: "7rem",
                    }}
                >
                    الْقُرآنُ{" "}
                </span>
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
                Natiq Quran, Easy to use quran app.
            </p>
            <Link to="/search">
                <Button
                    variant="filled"
                    size="medium"
                    style={{ margin: "auto" }}
                >
                    GET START
                </Button>
            </Link>
            <br />
            <p style={{ color: "#7d7d7d" }}>Suitable for all ages.</p>
            <span>
                <a target="blank" href="https://blog.natiq.net/privacy-policy">
                    Privacy policy
                </a>
                <span> . </span>
                <a target="blank" href="https://blog.natiq.net">
                    Learn more
                </a>
            </span>
        </>
    );
}
