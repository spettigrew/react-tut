import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    // runs a function after every render
    useEffect(() => {
        if (!res.ok) {
            throw Error("No data for that resource");
        }
        fetch(url)
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
                setIsLoading(false)
                setError(err.message)
            })
    }, []);
    return {data, isLoading, error}
}

export default useFetch;