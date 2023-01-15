import React from "react";
import { useNavigate } from "react-router-dom";

function HistoryBack(props: React.HTMLAttributes<HTMLDivElement>) {
    const navigate = useNavigate();

    return (
        <div
            {...props}
            onClick={() => {
                navigate(-1);
                props.onClick!(null as any);
            }}
        >
            {props.children}
        </div>
    );
}

export default HistoryBack;
