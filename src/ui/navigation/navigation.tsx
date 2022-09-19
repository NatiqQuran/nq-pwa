import React, { useMemo } from "react";
import { classnames } from "library";
import cssStyles from "./navigation.module.css";

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
}

function Navigation(props: NavigationProps) {
    return (
        <nav
            className={classnames(
                cssStyles.navigation,
                props.open ? cssStyles.open : cssStyles.close
            )}
        >
            {props.children}
        </nav>
    );
}

export default Navigation;
