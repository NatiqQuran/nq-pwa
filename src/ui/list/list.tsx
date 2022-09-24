import React from "react";
import styles from "./list.module.css";
import { joinClassNames } from "library";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}

function List(props: ListProps) {
    const classNames = joinClassNames(styles.list, props.className!);
    return (
        <ul {...props} className={classNames}>
            {props.children}
        </ul>
    );
}

export default List;
