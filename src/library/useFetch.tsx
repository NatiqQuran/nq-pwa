import React, { useEffect, useState } from "react";

/**
 * @description Custom Hook For handling Fetch
 * @version 0.1
 */
function useFetch(url: string, init: RequestInit) {
    const [response, setResponse] = useState<Response>();
    const [responseBody, setResponseBody] = useState<object | string>();
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [requestBody, setRequestBody] = useState<object>({});

    const send = () => {
        setLoading(true);
        fetch(url, { ...init, body: JSON.stringify(requestBody) })
            .then((response) => setResponse(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        response
            ?.clone()
            ?.json()
            .then((json) => setResponseBody(json))
            .catch(() =>
                response.text().then((string) => setResponseBody(string))
            );
    }, [response]);

    return {
        setRequestBody,
        response,
        send,
        responseBody,
        error,
        loading,
    };
}

export default useFetch;
