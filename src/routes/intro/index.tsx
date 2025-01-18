import { Link } from "react-router-dom";
import { Main, Page, Spacer, Button, Footer, Row } from "@yakad/ui";
import { Xbackground, XgetStart } from "@yakad/x";

import { ReactComponent as LogoIcon } from "assets/svg/logoicon.svg";
import { IntroAppBar } from "./appBar";
import Search from "./search";
import { LastReadingButton } from "components/lastReadingButton";

export default function Intro() {
    return (
        <Page>
            <IntroAppBar />
            <Main>
                <Xbackground variant="dotted">
                    <XgetStart logo={<LogoIcon />}>
                        <IntroGetStartBox />
                    </XgetStart>
                </Xbackground>
                <Search />
            </Main>
            <IntroFooter />
        </Page>
    );
}

function IntroGetStartBox() {
    return (
        <>
            <h1
                style={{
                    fontFamily: "Hafs",
                    textAlign: "center",
                    margin: "0",
                }}
            >
                <span
                    style={{
                        fontSize: "7rem",
                    }}
                >
                    الْقُرآنُ{" "}
                </span>
                <span style={{ fontSize: "7.7rem", color: "#aa8a59" }}>
                    النّاطِق
                </span>
            </h1>
            <h2 style={{ margin: "1rem" }}>Natiq Offline</h2>
            <p
                style={{
                    fontSize: "1.7rem",
                    textAlign: "center",
                    marginBottom: "2rem",
                }}
            >
                Read Quran in Natiq offline mode.
            </p>
            <Row align="center">
                <Button variant="outlined" disabled>
                    Random Surah
                </Button>
                <LastReadingButton />
            </Row>
            <p style={{ color: "#7d7d7d" }}>Suitable for all ages</p>
            <a target="blank" href="https://blog.natiq.net/privacy-policy">
                Privacy Policy
            </a>
        </>
    );
}

const IntroFooter = () => (
    <Footer>
        <Link to="https://blog.natiq.net/privacy-policy" target="_blank">
            <Button variant="link">Privacy Policy</Button>
        </Link>
        <Spacer />
        <Link to="https://blog.natiq.net" target="_blank">
            <Button variant="link">Blog</Button>
        </Link>
        <Link to="https://blog.natiq.net/sponsor" target="_blank">
            <Button variant="link">Sponsor</Button>
        </Link>
        <Link to="https://github.com/NatiqQuran/nq-offline" target="_blank">
            <Button variant="link">GitHub</Button>
        </Link>
    </Footer>
);
