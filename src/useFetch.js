import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    // runs a function after every render
    useEffect(() => {
        // will stop the fetch from re-rendering from the homepage
        const abortContinue = new AbortController();
        if (!res.ok) {
            throw Error("No data for that resource");
        }
        fetch(url, {signal: abortContinue.signal})
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            // catches a network error
            .catch(err => {
                if (err.name === "AbortError")
                setIsLoading(false)
                setError(err.message)
            })
        // aborts the fetch it's associated with
            return () => abortContinue.abort();
    }, [url]);


    return {data, isLoading, error}
}

export default useFetch;