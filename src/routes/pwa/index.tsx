import { Link, useNavigate } from "react-router-dom";
import {
    AppBar,
    Container,
    Button,
    Page,
    Main,
    SvgIcon,
    Spacer,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

import { ReactComponent as Logo } from "assets/svg/logoicon.svg";

//Test mode in local host
const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
);

export default function Pwa() {
    const navigate = useNavigate();

    const isPwaIntroPagePassed: boolean =
        localStorage.getItem("pwaIntroPassed") === "true";

    const navigateTo = () => {
        navigator.onLine
            ? navigate("/next", { replace: true })
            : navigate("/offline", { replace: true });
    };

    if (!isLocalhost && isPwaIntroPagePassed) navigateTo();

    const launch = () => {
        localStorage.setItem("pwaIntroPassed", "true");
        navigateTo();
    };

    return (
        <Page>
            <PwaAppBar />
            <Main>
                <Container
                    size="sm"
                    align="center"
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        minHeight: "calc(100vh - 6rem)",
                        paddingTop: "3rem",
                        paddingBottom: "3rem",
                    }}
                >
                    <div>
                        <SvgIcon size={15}>
                            <Logo />
                        </SvgIcon>
                        <h2>Natiq PWA</h2>
                        <p>Wellcome to Natiq PWA mode</p>
                        <ul style={{ textAlign: "start" }}>
                            <li>Use like your native apps</li>
                            <li>Read Quran when offline</li>
                            <li>Keep a Quran text in your system</li>
                            <li>Full access to web version feathers</li>
                        </ul>
                    </div>
                    <div>
                        <Button
                            variant="filled"
                            icon={<Symbol icon="start" />}
                            onClick={launch}
                        >
                            Launch Natiq
                        </Button>
                        <p>or</p>
                        <Link to="https://blog.natiq.net" target="_blank">
                            <Button
                                variant="link"
                                icon={<Symbol icon="read_more" />}
                            >
                                Read more
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Main>
        </Page>
    );
}

const PwaAppBar = () => (
    <AppBar>
        <SvgIcon size={5}>
            <Logo />
        </SvgIcon>
        <h1
            style={{
                fontFamily: "arial",
                fontSize: "2.4rem",
                fontWeight: "normal",
                letterSpacing: "0.1rem",
            }}
        >
            Natiq
        </h1>
        <Spacer />
        <Link to="/">
            <Button
                variant="outlined"
                icon={<Symbol icon="download_for_offline" />}
            >
                Offline mode
            </Button>
        </Link>
    </AppBar>
);
