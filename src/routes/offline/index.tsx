import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Page, Main } from "@yakad/ui";
import Symbol from "@yakad/symbols";

import { PwaAppBar } from "routes/pwa";
import { useEffect, useState } from "react";

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
        <Page>
            <PwaAppBar />
            <Main>
                <Container
                    size="sm"
                    align="center"
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        minHeight: "100vh",
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
        </Page>
    );
}
