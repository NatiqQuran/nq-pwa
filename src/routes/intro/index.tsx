import React from "react";
import { Link } from "react-router-dom";
import { Header, Main, Button, Page, Spacer } from "ui";

function Intro() {
    return (
        <Page>
            <Header>
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
            </Header>

            <Main style={{ background: "red" }}>
                <div>
                    <h1>Hello World</h1>
                </div>
            </Main>
        </Page>
    );
}

export default Intro;
