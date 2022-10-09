import React from "react";
import { joinClassNames } from "library";
import styles from "./list.module.css";

function List(props: React.HTMLAttributes<HTMLUListElement>) {
    const joinedClassNames = joinClassNames(styles.list, props.className!);

    return (
        <ul {...props} className={joinedClassNames}>
            {props.children}
        </ul>
    );
}

export default List;
