import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./gridContainer.module.css";

interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    rowGap?: number;
    columnGap?: number;
}

// Custom Button Element
function GridContainer(props: GridContainerProps) {
    const joinedClassNames = joinClassNames(
        styles.gridcontainer,
        props.className!
    );
    const joinedStyles = joinStyles(
        props.xl ? { gridTemplateColumns: " 1fr".repeat(props.xl) } : {},
        { columnGap: props.columnGap ? props.columnGap + "rem" : "1.5rem" },
        { rowGap: props.rowGap ? props.rowGap + "rem" : "1.5rem" },
        props.style!
    );
    return (
        <div {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </div>
    );
}

export default GridContainer;
