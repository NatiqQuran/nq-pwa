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
    DisplayOnScreen,
    ClickAwayListener,
    Footer,
} from "@yakad/ui";
import { Xbackground, XgetStart } from "@yakad/x";
import { ReactComponent as LogoIcon } from "../../assets/svg/logoicon.svg";
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
                <DisplayOnScreen smallerOrEqualTo="md">
                    <Button
                        icon={<Symbol icon="menu" />}
                        onClick={() => setNavOpen(true)}
                    />
                </DisplayOnScreen>
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
                <DisplayOnScreen largerThan="md">
                    <List>{navListItems.map((item) => item)}</List>
                </DisplayOnScreen>
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
            <Footer>
                <a target="blank" href="https://blog.natiq.net/privacy-policy">
                    <Button variant="link">Privacy Policy</Button>
                </a>
                <a target="blank" href="https://blog.natiq.net/terms-of-use">
                    <Button variant="link">Terms of Use</Button>
                </a>
                <Spacer />
                <a href="https://blog.natiq.net" target="_blank">
                    <Button variant="link">Blog</Button>
                </a>
                <a href="https://blog.natiq.net/about" target="_blank">
                    <Button variant="link">About</Button>
                </a>
            </Footer>
            <ClickAwayListener onClickAway={() => setNavOpen(false)}>
                <Navigation anchor="top" open={navOpen}>
                    <List direction="column" style={{ padding: "0 2rem" }}>
                        {navListItems.map((item) => item)}
                    </List>
                </Navigation>
            </ClickAwayListener>
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
                    fontSize: "1.7rem",
                    textAlign: "center",
                    marginBottom: "3rem",
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
                <a target="blank" href="https://blog.natiq.net">
                    Learn more
                </a>
            </span>
        </>
    );
}
