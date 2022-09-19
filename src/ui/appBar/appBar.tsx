import React from "react";
import appBarStyles from "./appBar.module.css";
import { classnames } from "library";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function AppBar(props: HeaderProps) {
    return (
        <div className={classnames(appBarStyles.appBar, props.className!)}>
            {props.children}
        </div>
    );
}

export default AppBar;
