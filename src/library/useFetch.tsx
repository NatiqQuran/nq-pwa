import React, { useEffect, useState } from "react";

/**
 * @description Custom Hook For handling Fetch
 * @version 0.1
 */
function useFetch(url: string, init?: RequestInit) {
    const [response, setResponse] = useState<Response>();
    const [body, setBody] = useState<object | string>();
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const send = () => {
        setLoading(true);
        fetch(url, init)
            .then((response) => setResponse(response))
            .catch((error) => setError(error));
        setLoading(false);
    };

    useEffect(() => {
        response
            ?.clone()
            ?.json()
            .then((json) => setBody(json))
            .catch(() => response.text().then((string) => setBody(string)));
    }, [response]);

    return { response, send, body, error, loading };
}

export default useFetch;
