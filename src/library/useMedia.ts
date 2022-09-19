import React, { useState, useEffect } from "react";

function useMedia(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        setMatches(window.matchMedia(query).matches);
    });

    return matches;
}

export default useMedia;