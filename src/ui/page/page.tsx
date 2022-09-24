import { joinClassNames } from "library";
import React from "react";
import styles from "./page.module.css";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

function Page(props: PageProps) {
    const classNames = joinClassNames(styles.page, props.className!);

    return <div className={classNames}>{props.children}</div>;
}

export default Page;
