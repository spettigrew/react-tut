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
                // recognize the error within the catch and stop the state update
                if (err.name === "AbortError") {
                    console.log('fetch abort')
                    // if there is a network error
                } else {
                setIsLoading(false)
                setError(err.message)
            }
            })
        // the return function aborts the fetch it's associated with within the useEffect 
            return () => abortContinue.abort();
    }, [url]);


    return {data, isLoading, error}
}

export default useFetch;