import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Screen, Main, AppBar, SvgIcon } from "@yakad/ui";
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

export default function Offline() {
    const refresh = () => window.location.reload();

    const navigate = useNavigate();

    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
    useEffect(() => {
        ononline = () => setIsOnline(true);
        onoffline = () => setIsOnline(false);
    }, []);

    useEffect(() => {
        if (!isLocalhost && isOnline) navigate("/next", { replace: true });
    }, [isOnline, navigate]);

    return (
        <Screen>
            <OfflineAppBar />
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
                        <Symbol size={12} icon="offline_bolt" />
                        <h2>You are offline</h2>
                    </div>
                    <div>
                        <Button
                            variant="filled"
                            icon={<Symbol icon="refresh" />}
                            onClick={refresh}
                        >
                            Refresh
                        </Button>
                        <p>or</p>
                        <Link to="/">
                            <Button
                                variant="outlined"
                                icon={<Symbol icon="download_for_offline" />}
                            >
                                Use offline mode
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Main>
        </Screen>
    );
}

const OfflineAppBar = () => (
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
    </AppBar>
);
