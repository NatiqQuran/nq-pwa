import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Main, Button, Page, Spacer, Stack } from "ui";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

function Intro() {
    return (
        <Page>
            <AppBar>
                <Button icon={<Menu />} />
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
                <Button icon={<SearchIcon />} />
            </AppBar>

            <Main>
                <div>
                    <h1>Hello World</h1>
                </div>
            </Main>
        </Page>
    );
}

export default Intro;
