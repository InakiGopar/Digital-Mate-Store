import { useState, useEffect } from "react";
import { useData } from "./useData";

export function useProducts(url) {

    const { data, loading, error } = useData(url);
    const [products, setProducts] = useState([]);

    //se puede mejorar!!
    const flag = url.includes('field');

    console.log(data);

    useEffect(()=> {
        if(data) {
            if(flag) {
                setProducts(data);
                return;
            }
            setProducts(data.data);
        }
    }, [data]);



    return {
        products,
        loading,
        error
    }
}