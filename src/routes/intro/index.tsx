import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Main,
    Page,
    AppBar,
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
import Symbol from "@yakad/symbols";

import { ReactComponent as LogoIcon } from "../../assets/svg/logoicon.svg";

export default function Intro() {
    return (
        <Page>
            <IntroAppBar />
            <Main>
                <Xbackground variant="dotted">
                    <XgetStart logo={<LogoIcon />}>
                        <IntroGetStartBox />
                    </XgetStart>
                </Xbackground>
            </Main>
            <IntroFooter />
        </Page>
    );
}

function IntroAppBar() {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    const navListItems: Array<React.ReactElement> = [
        <ListItem>
            <Link to="search">
                <Button variant="link" style={{ width: "100%" }}>
                    Quran
                </Button>
            </Link>
        </ListItem>,
        <ListItem>
            <a href="https://blog.natiq.net" target="_blank">
                <Button variant="link" style={{ width: "100%" }}>
                    Blog
                </Button>
            </a>
        </ListItem>,
    ];

    return (
        <>
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
                        <DisplayOnScreen largerThan="xs">
                            Search
                        </DisplayOnScreen>
                    </Button>
                </Link>
            </AppBar>
            <ClickAwayListener onClickAway={() => setNavOpen(false)}>
                <Navigation anchor="top" open={navOpen}>
                    <List direction="column" style={{ padding: "0 2rem" }}>
                        {navListItems.map((item) => item)}
                    </List>
                </Navigation>
            </ClickAwayListener>
        </>
    );
}

export function IntroGetStartBox() {
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
                <a target="blank" href="https://blog.natiq.net/privacy-policy">
                    Privacy Policy
                </a>
                <span> . </span>
                <a target="blank" href="https://blog.natiq.net">
                    Read more
                </a>
            </span>
        </>
    );
}

function IntroFooter() {
    return (
        <Footer>
            <a target="blank" href="https://blog.natiq.net/privacy-policy">
                <Button variant="link">Privacy Policy</Button>
            </a>
            <Spacer />
            <a href="https://blog.natiq.net/vision" target="_blank">
                <Button variant="link">Vision</Button>
            </a>
            <a href="https://blog.natiq.net/team" target="_blank">
                <Button variant="link">Team</Button>
            </a>
            <a href="https://blog.natiq.net/sponsor" target="_blank">
                <Button variant="link">Sponsor</Button>
            </a>
            <a href="https://blog.natiq.net/about" target="_blank">
                <Button variant="link">About</Button>
            </a>
        </Footer>
    );
}
