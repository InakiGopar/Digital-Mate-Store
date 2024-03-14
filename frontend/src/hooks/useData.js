import { useEffect, useState } from "react";

export function useData(url) {
    console.log(url);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            console.log(data);
            setData(data);
        })
        .catch((error)=> setError(error))
        .finally(() => setLoading(false));
    },[url]);

    return { data, loading, error }
}