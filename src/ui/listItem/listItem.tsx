import React from "react";

function ListItem(props: React.HTMLAttributes<HTMLLIElement>) {
    return <li {...props}>{props.children}</li>;
}

export default ListItem;
