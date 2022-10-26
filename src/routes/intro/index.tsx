import React, { useEffect, useState } from "react";
import { useFetch, useMedia } from "library";
import { Link } from "react-router-dom";
import {
    AppBar,
    Main,
    Button,
    Page,
    Spacer,
    Stack,
    ListItem,
    List,
    ClickAwayListener,
    Navigation,
    SvgIcon,
} from "ui";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";

function Intro() {
    return (
        <Page>
            <AppBar>
                <h1>Natiq</h1>
                <Spacer />
                <Link to="/quran">
                    <Button>Quran</Button>
                </Link>
                <Link to="/pwa">
                    <Button>PWA</Button>
                </Link>
                <Link to="/account/login">
                    <Button>login</Button>
                </Link>
            </AppBar>

            <Main
                style={{
                    alignItems: "center",
                    position: "fixed",
                    top: "6rem",
                    height: "calc(100% - 6rem)",
                }}
            >
                <h1>hello world!</h1>
            </Main>
        </Page>
    );
}

export default Intro;
