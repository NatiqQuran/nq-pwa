import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./chekBox.module.css";
import { SvgIcon } from "@yakad/ui";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    variant?: "standard" | "outlined" | "filled";
}

function Checkbox(props: CheckboxProps) {
    const joinedClassNames = joinClassNames(
        styles.input,
        props.variant ? styles[props.variant] : styles.standard,
        props.className!
    );
    return (
        <div className="checkbox-wrapper-46">
            <input className="inp-cbx" id="cbx-46" type="checkbox" />
            <label className="cbx">
                <span>
                    <svg width="12px" height="10px">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <span>Checkbox</span>
            </label>
        </div>
    );
}

export default Checkbox;
