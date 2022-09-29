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
    const [requestBody, setRequestBody] = useState<object>({});

    const send = () => {
        setLoading(true);
        fetch(url, { ...defaultInit, body: JSON.stringify(requestBody) })
            .then((response) => setResponse(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    const changeUrl = (newUrl: string) => setUrl(newUrl);

    const updateRequestBody = (newBody: object) =>
        setRequestBody((pervBody) => ({ ...pervBody, ...newBody }));

    useEffect(() => {
        response
            ?.clone()
            ?.json()
            .then((json) => setBody(json))
            .catch(() => response.text().then((string) => setBody(string)));
    }, [response]);

    return {
        updateRequestBody,
        changeUrl,
        response,
        send,
        body,
        error,
        loading,
    };
}

export default useFetch;
