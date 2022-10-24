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

function NavigationList() {
    const [collapsedList, setcollapsedList] = React.useState(true);

    const handleClick = () => {
        setcollapsedList(!collapsedList);
    };

    return (
        <List direction="column">
            <ListItem>
                <Button
                    size="medium"
                    icon={<Menu />}
                    borderStyle="semi"
                    onClick={handleClick}
                >
                    <span>Quran</span>
                    <Spacer />
                    <span style={{ color: "#7d7d7d", fontSize: "1.4rem" }}>
                        14:106
                    </span>
                </Button>
                <List collapsed={collapsedList}>
                    <ListItem>
                        <Button size="medium" borderStyle="semi">
                            <span>Cantact</span>
                        </Button>
                    </ListItem>
                </List>
            </ListItem>
            <ListItem>
                <Button size="medium" borderStyle="semi">
                    <span>Quran</span>
                    <Spacer />
                </Button>
            </ListItem>
        </List>
    );
}

function Intro() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");
    const toggleNavOpen = () => setNavOpen(value => !value);
    return (
        <Page>
            <AppBar>
                <Button
                    icon={<Menu />}
                    variant="tonal"
                    onClick={toggleNavOpen}
                />
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
                navOpen={navOpen}
                style={{
                    alignItems: "center",
                    position: "fixed",
                    top: "6rem",
                    height: "calc(100% - 6rem)",
                }}
            >
                <h1>hello world!</h1>
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
