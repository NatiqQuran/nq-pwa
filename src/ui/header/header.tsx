import React from "react";
import styles from "./header.module.css";
import { joinClassNames } from "library";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function Header(props: HeaderProps) {
    const classNames = joinClassNames(styles.appBar, props.className!);
    return <header className={classNames}>{props.children}</header>;
}

export default Header;
