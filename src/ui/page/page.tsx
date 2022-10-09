import React from "react";
import { joinClassNames } from "library";
import styles from "./page.module.css";

function Page(props: React.HTMLAttributes<HTMLDivElement>) {
    const joinedClassNames = joinClassNames(styles.page, props.className!);

    return (
        <div className={joinedClassNames} {...props}>
            {props.children}
        </div>
    );
}

export default Page;
