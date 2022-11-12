import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch, useMedia } from "@yakad/lib";

import {
    AppBar,
    Main,
    Button,
    Page,
    Spacer,
    Container,
    GridContainer,
    GridItem,
    SvgIcon,
    Stack,
    Footer,
    Navigation,
    ClickAwayListener,
    Row,
    Hr,
} from "../../ui";
import styles from "./intro.module.css";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { ReactComponent as LogoIcon } from "../../assets/svg/logoicon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

interface navListItem {
    name: string;
    path: string;
}

const navList: Array<navListItem> = [
    {
        name: "Quran",
        path: "/quran",
    },

    {
        name: "Blog",
        path: "/",
    },
    {
        name: "Panel",
        path: "/",
    },
];

function Intro() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");
    const toggleNavOpen = () => setNavOpen(value => !value);
    return (
        <Page>
            <AppBar>
                <Button
                    className={styles.navbar}
                    icon={<Menu />}
                    onClick={toggleNavOpen}
                />
                <h1>Natiq</h1>
                <Row className={styles.appbar}>
                    {navList.map(item => (
                        <Link to={item.path}>
                            <Button>{item.name}</Button>
                        </Link>
                    ))}
                </Row>
                <Spacer />
                <Link to="/search">
                    <Button variant="outlined" icon={<SearchIcon />}>
                        Search
                    </Button>
                </Link>
            </AppBar>

            <Main style={{ background: "#7d7d7d7d" }}>
                <Container maxWidth="lg">
                    <GridContainer className={styles.grid}>
                        <GridItem md={12} xl={6}>
                            <SvgIcon>
                                <LogoIcon />
                            </SvgIcon>
                        </GridItem>
                        <GridItem
                            md={12}
                            xl={6}
                            style={{
                                alignItems: "center",
                                display: "flex",
                                paddingRight: "3rem",
                            }}
                        >
                            <Stack style={{ alignItems: "center" }}>
                                <span style={{ display: "flex" }}>
                                    <h1
                                        style={{
                                            fontSize: "7rem",
                                            color: "#aa8a59",
                                        }}
                                    >
                                        النّاطِق
                                    </h1>
                                    <h1
                                        style={{
                                            fontSize: "7rem",
                                        }}
                                    >
                                        الْقُرآنُ
                                    </h1>{" "}
                                </span>
                                <p
                                    style={{
                                        textAlign: "justify",
                                        textAlignLast: "center",
                                        fontSize: "1.6rem",
                                        lineHeight: "2rem",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eaque, ducimus? Voluptates
                                    aliquam cumque harum expedita assumenda.
                                    Iste delectus neque ipsum ratione, facilis,
                                    mollitia voluptates ipsa quam reiciendis
                                    quis eius! Reiciendis?
                                </p>
                                <Button variant="filled">GET START</Button>
                            </Stack>
                        </GridItem>
                    </GridContainer>
                </Container>
            </Main>
            <Footer
                style={{
                    padding: "2rem",
                }}
            >
                <Container maxWidth="lg" style={{ alignItems: "center" }}>
                    <SvgIcon size={7}>
                        <LogoIcon />
                    </SvgIcon>
                    <Spacer />
                    <a href="https://github.com/NatiqQuran" target="_blank">
                        <Button variant="link">Gihub</Button>
                    </a>
                    <Button variant="link">API</Button>
                </Container>
            </Footer>
            {matches ? (
                <ClickAwayListener onClickAway={() => setNavOpen(false)}>
                    <Navigation anchor="top" open={navOpen}>
                        {navList.map(item => (
                            <Link to={item.path}>
                                <Button>{item.name}</Button>
                            </Link>
                        ))}
                    </Navigation>
                </ClickAwayListener>
            ) : (
                <Navigation anchor="top" open={navOpen}>
                    {navList.map(item => (
                        <Link to={item.path}>
                            <Button>{item.name}</Button>
                        </Link>
                    ))}
                </Navigation>
            )}
        </Page>
    );
}

export default Intro;
