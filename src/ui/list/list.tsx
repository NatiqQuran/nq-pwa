import React from "react";
import { joinClassNames } from "library";
import styles from "./list.module.css";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    direction?: "row" | "column";
}

function List(props: ListProps) {
    const joinedClassNames = joinClassNames(
        styles.list,
        props.direction ? styles[props.direction] : styles.row,
        props.className!
    );

    return (
        <ul {...props} className={joinedClassNames}>
            {props.children}
        </ul>
    );
}

export default List;
