import React, { useEffect } from "react";

// Custom Hook
// For handling Fetch
function useFetch(url: string) {
    const [response, setResponse] = React.useState<Response>();
    const [body, setBody] = React.useState<object | string>();

    const send = () => fetch(url, {}).then((response) => setResponse(response));

    useEffect(() => {
        response
            ?.clone()
            ?.json()
            .then((json) => setBody(json))
            .catch(() => response.text().then((string) => setBody(string)));
    }, [response]);

    return { response, send, body };
}

export default useFetch;
