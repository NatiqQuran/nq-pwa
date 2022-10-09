import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./gridItem.module.css";

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

// Custom Button Element
function GridItem(props: GridItemProps) {
    const joinedStyles = joinStyles(
        props.xl ? { gridColumn: "span " + props.xl } : {},
        props.style!
    );

    return (
        <div {...props} style={joinedStyles}>
            {props.children}
        </div>
    );
}

export default GridItem;
