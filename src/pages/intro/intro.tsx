import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Navigation,
    ClickAwayListener,
    Button,
    List,
    ListItem,
    ListItemButton,
} from "ui";
import { useMedia } from "library";
import { ReactComponent as Humburger } from "../../assets/svg/humburger.svg";

const NavigationList = () => (
    <List>
        <ListItem>
            <ListItemButton>Contact Us</ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>About Natiq</ListItemButton>
        </ListItem>
    </List>
);

function Intro() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");

    const toggleNavOpen = () => setNavOpen((value) => !value);

    return (
        <div>
            <AppBar>
                <Button onClick={toggleNavOpen} variant="outlined">
                    <Humburger />
                </Button>
                <Link to="/quran">
                    <Button>Quran</Button>
                </Link>
                <Link to="/pwa">
                    <Button>PWA</Button>
                </Link>
            </AppBar>

            {matches ? (
                <ClickAwayListener onClickAway={() => setNavOpen(false)}>
                    <Navigation open={navOpen}>
                        <NavigationList />
                    </Navigation>
                </ClickAwayListener>
            ) : (
                <Navigation open={navOpen}>
                    <NavigationList />
                </Navigation>
            )}
        </div>
    );
}

export default Intro;
