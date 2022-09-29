import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Header,
    Main,
    Navigation,
    ClickAwayListener,
    Button,
    List,
    ListItem,
    ListItemButton,
    useTheme,
    Page,
    Gap,
} from "ui";
import { useMedia } from "library";
import { ReactComponent as Humburger } from "../../assets/svg/humburger.svg";
import styles from "../../assets/css/color.module.css";

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
    const setTheme = useTheme(styles.colors);

    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");

    const toggleNavOpen = () => setNavOpen((value) => !value);

    return (
        <Page>
            <Header>
                <Button onClick={toggleNavOpen} variant="outlined">
                    <Humburger />
                </Button>
                <h1>Natiq</h1>
                <Gap />
                <Link to="/quran">
                    <Button>Quran</Button>
                </Link>
                <Link to="/pwa">
                    <Button>PWA</Button>
                </Link>
                <Link to="/login">
                    <Button>login</Button>
                </Link>
            </Header>

            <Main navOpen={navOpen} style={{ background: "red" }}>
                <div>
                    <h1>Hello World</h1>
                </div>
            </Main>

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
        </Page>
    );
}

export default Intro;
