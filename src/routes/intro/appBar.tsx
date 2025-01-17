import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Spacer, Button, SvgIcon, DisplayOnScreen } from "@yakad/ui";
import Symbol from "@yakad/symbols";

import { ReactComponent as LogoIcon } from "../../assets/svg/logoicon.svg";

export function IntroAppBar() {
    const [online, setOnline] = useState<boolean>(navigator.onLine);
    useEffect(() => {
        ononline = () => setOnline(true);
        onoffline = () => setOnline(false);
    }, []);

    return (
        <AppBar positionsticky>
            <SvgIcon size={5}>
                <LogoIcon />
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
            {online ? (
                <Link to="/next">
                    <Button variant="filled" icon={<Symbol icon="start" />}>
                        Go Online
                    </Button>
                </Link>
            ) : (
                <Button
                    variant="elevated"
                    icon={<Symbol icon="offline_bolt" />}
                    disabled
                >
                    Offline
                </Button>
            )}
        </AppBar>
    );
}
