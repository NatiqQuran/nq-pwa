import { AppBar, Spacer, SvgIcon } from "@yakad/ui";

import { ReactComponent as LogoIcon } from "assets/svg/logoicon.svg";
import { GoOnlineButton } from "components/goOnlineButton";

export function IntroAppBar() {
    return (
        <AppBar>
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
            <GoOnlineButton />
        </AppBar>
    );
}
