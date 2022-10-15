import React from "react";
import { joinClassNames } from "library";
import styles from "./card.module.css";

function Card(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.card, props.className!);

    return (
        <div {...props} className={joinedClassNames}>
            {props.children}
        </div>
    );
}

export default Card;
