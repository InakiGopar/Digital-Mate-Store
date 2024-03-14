import { useState, useEffect } from "react";
import { useProducts } from './useProducts';


export function usePagination() {
    const [page, setPage] = useState(1);
    const [url, setUrl] = useState('http://localhost:1111/productos');
    const { products, loading, error } = useProducts(url);

    useEffect(()=>{
        setUrl(`http://localhost:1111/productos?page=${page}`);
    },[page]);

    useEffect(() => {
        if (products.length === 0) {
            setPage(1);
        }
    }, [products]);
    

    const turnPage = ()=> {
        setPage(page + 1);
    }

    const previousPage = ()=> {
        setPage(page - 1);
    }

    return {
        page,
        products,
        loading,
        error,
        turnPage,
        previousPage
    }
}