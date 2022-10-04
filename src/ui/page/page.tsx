import { joinClassNames } from "library";
import React from "react";
import styles from "./page.module.css";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

function Page(props: PageProps) {
    const joinedClassNames = joinClassNames(styles.page, props.className!);

    return <div className={joinedClassNames}>{props.children}</div>;
}

export default Page;
