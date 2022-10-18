import React from "react";
import { Link } from "react-router-dom";
import { Header, Main, Button, Page, Spacer } from "ui";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

function Intro() {
    return (
        <Page>
            <Header>
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
            </Header>

            <Main style={{ background: "red" }}>
                <div>
                    <h1>Hello World</h1>
                    <Button icon={<SearchIcon />} />
                </div>
            </Main>
        </Page>
    );
}

export default Intro;
