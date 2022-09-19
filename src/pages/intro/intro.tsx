import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AppBar } from "ui";
import { Navigation } from "ui";
import ClickAwayListener from "ui/clickAwayListener/clickAwayListener";
import { useMedia } from "library";

function Intro() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");

    const toggleNavOpen = () => setNavOpen((value) => !value);

    return (
        <div>
            <AppBar>
                <Link to="/quran">
                    <button>Quran</button>
                </Link>
                <Link to="/pwa">
                    <button>PWA</button>
                </Link>
            </AppBar>

            {matches ? (
                <ClickAwayListener onClickAway={() => setNavOpen(false)}>
                    <Navigation open={navOpen}>
                        <h1>Just Navigation</h1>
                    </Navigation>
                </ClickAwayListener>
            ) : (
                <Navigation open={navOpen}>
                    <h1>Just Navigation</h1>
                </Navigation>
            )}
        </div>
    );
}

export default Intro;
