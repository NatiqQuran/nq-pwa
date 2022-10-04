import React from "react";
import styles from "./header.module.css";
import { joinClassNames } from "library";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function Header(props: HeaderProps) {
    const joinedClassNames = joinClassNames(styles.appBar, props.className!);
    return <header className={joinedClassNames}>{props.children}</header>;
}

export default Header;
