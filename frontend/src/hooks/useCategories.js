import { useEffect, useState } from "react";
import { useData } from "./useData";


export function useCategories(url) {

    const { data, loading, error } = useData(url);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        if(data) {
            setCategories(data);
        }
    },[data])

    return {
        categories,
        loading,
        error
    }
}