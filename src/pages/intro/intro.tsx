import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "library";
import { Header } from "components";
import { Navigation } from "ui";
import ClickAwayListener from "ui/clickAwayListener/clickAwayListener";

function Intro() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const { body, send, response, error, loading } = useFetch(
        "http://127.0.0.1/status"
    );

    const toggleNavOpen = () => setNavOpen((value) => !value);

    return (
        <div>
            <Header
                title="HelloWorld"
                button={"menu"}
                buttonOnClick={toggleNavOpen}
            >
                <Link to="/quran">
                    <button onClick={send}>Quran</button>
                </Link>
                <Link to="/pwa">
                    <button onClick={send}>PWA</button>
                </Link>
            </Header>

            <ClickAwayListener onClickAway={() => setNavOpen(false)}>
                <Navigation open={navOpen}>
                    <h1>Just Navigation</h1>
                </Navigation>
            </ClickAwayListener>
        </div>
    );
}

export default Intro;
