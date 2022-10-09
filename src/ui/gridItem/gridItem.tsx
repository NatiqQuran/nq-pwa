import React from "react";
import { joinStyles, joinClassNames } from "library";
import styles from "./gridItem.module.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

// Custom Button Element
function GridItem(props: ContainerProps) {
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
