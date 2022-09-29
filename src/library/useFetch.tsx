import React, { useEffect, useState } from "react";

/**
 * @description Custom Hook For handling Fetch
 * @version 0.1
 */
function useFetch(defaultUrl: string, defaultInit: RequestInit) {
    const [response, setResponse] = useState<Response>();
    const [body, setBody] = useState<object | string>();
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [url, setUrl] = useState<string | URL>(defaultUrl);
    const [init, setInit] = useState<RequestInit>(defaultInit);

    const send = () => {
        setLoading(true);
        fetch(url, init)
            .then((response) => setResponse(response))
            .catch((error) => setError(error));
        setLoading(false);
    };

    const changeInit = (newInit: RequestInit) =>
        setInit((pervInit) => ({ ...pervInit, ...newInit }));

    const changeUrl = (newUrl: string) => setUrl(newUrl);

    useEffect(() => {
        response
            ?.clone()
            ?.json()
            .then((json) => setBody(json))
            .catch(() => response.text().then((string) => setBody(string)));
    }, [response]);

    return { changeInit, changeUrl, response, send, body, error, loading };
}

export default useFetch;
