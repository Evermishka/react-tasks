import { useCallback, useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const refetch = useCallback((paramsObject = {}) => {
        setIsLoading(true);
        
        const newUrl = new URL(url);
        Object.keys(paramsObject.params).forEach(key => newUrl.searchParams.set(key, String(paramsObject.params[key])));
        
        fetch(newUrl)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, [url])

    useEffect(() => {
        refetch();
    }, [refetch]);        

    return {
        data,
        isLoading,
        error,
        refetch
    }
}