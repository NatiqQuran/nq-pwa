import React from "react";

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

function ListItem(props: ListItemProps) {
    return <li {...props}>{props.children}</li>;
}

export default ListItem;
