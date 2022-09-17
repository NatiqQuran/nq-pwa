import React from "react";
import styles from "./grid.module.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

// Custom Button Element
function Grid(props: ContainerProps) {
    return <div className={styles.grid}>{props.children}</div>;
}

export default Grid;
