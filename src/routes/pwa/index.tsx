import React from "react";
import { Link, Navigate } from "react-router-dom";
import {
    AppBar,
    Container,
    Button,
    Page,
    Main,
    SvgIcon,
    Spacer,
} from "@yakad/ui";
import { ReactComponent as Logo } from "../../assets/svg/logoicon.svg";
import { IntroDialogBox } from "routes/intro";
import Symbol from "@yakad/symbols";

const pwaIntroPagePassed = () => {
    localStorage.setItem("pwaIntroPassed", "true");
};

export default function Pwa() {
    return (
        <Page>
            {/* <Navigate replace to="/" /> */}
            <AppBar>
                <SvgIcon size={5}>
                    <Logo />
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
                <Spacer />
                <Link to="/search">
                    <Button variant="outlined" icon={<Symbol icon="search" />}>
                        Search
                    </Button>
                </Link>
            </AppBar>
            <Main
                style={{
                    position: "fixed",
                    top: "6rem",
                    height: "calc(100% - 6rem)",
                }}
            >
                <Container
                    maxWidth="sm"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <SvgIcon size={15}>
                        <Logo />
                    </SvgIcon>
                    <IntroDialogBox />
                </Container>
            </Main>
        </Page>
    );
}
