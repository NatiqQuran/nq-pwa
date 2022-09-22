import React, { useEffect, useState } from "react";

/**
 * Sets class to html element
 * @param styles Styles for colors (Css variables)
 * @returns
 */
function useTheme(styles: string) {
    const [theme, setTheme] = useState(styles);

    useEffect(() => {
        console.log(theme);

        document.querySelector("html")?.classList.add(theme);
    }, [theme]);

    return [theme, setTheme];
}

export default useTheme;
