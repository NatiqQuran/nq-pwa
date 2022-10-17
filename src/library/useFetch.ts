import React, { useEffect, useMemo, useState } from "react";

/**
 * @description Custom Hook For handling Fetch
 * @version 0.1
 */
function useFetch<ResponseType = object>(url: string, init: RequestInit) {
    const [response, setResponse] = useState<Response>();
    const [responseBody, setResponseBody] = useState<ResponseType>({} as ResponseType);
    const [error, setError] = useState<null | Error>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [requestInit, setRequestInit] = useState<RequestInit>({});
    const [isResponseBodyReady, setIsResponseBodyReady] = useState<boolean>(false);

    useEffect(() => setRequestInit(init), [init.body]);

    const send = () => {
        setLoading(true);

        fetch(url, requestInit)
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
                response.text().then((string) => setResponseBody(string as ResponseType))
            )
            .finally(() =>
                setIsResponseBodyReady(true)
            );
    }, [response]);

    return {
        response,
        send,
        responseBody,
        error,
        loading,
        isResponseBodyReady
    };
}

export default useFetch;
