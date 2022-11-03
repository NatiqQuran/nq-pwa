import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Button, Page, Main, SvgIcon } from "@yakad/ui";
import { ReactComponent as Logo } from "../../assets/svg/logoicon.svg";
import styles from "./pwa.module.css";

const pwaIntroPagePassed = () => {
    localStorage.setItem("pwaIntroPassed", "true");
};

function Pwa() {
    return (
        <Page>
            <AppBar>
                <Link to="/">
                    <Button variant="outlined" onClick={pwaIntroPagePassed}>
                        Intro
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
                    <h1 style={{ lineHeight: "5rem", fontSize: "3rem" }}>
                        الْقُرآنُ النّاطِق
                    </h1>
                    <Link to="/quran">
                        <Button className={styles.getStartButton}>
                            Get start now!
                        </Button>
                    </Link>
                    <span>
                        <a target="blank" href="https://nategh.info">
                            Privacy policy
                        </a>{" "}
                        .{" "}
                        <a target="blank" href="https://nategh.info">
                            Learn more
                        </a>
                    </span>
                </Container>
            </Main>
        </Page>
    );
}

export default Pwa;
