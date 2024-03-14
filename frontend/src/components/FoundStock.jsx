import './styles/FoundStock.css';
import { IconButton, TextField } from "@radix-ui/themes";
import {MagnifyingGlassIcon} from '@radix-ui/react-icons';
import { getData } from '../logic/fetchData';
import { useEffect, useState } from 'react';
import { NavBar } from './NavBar';

export function FoundStock() {

    const [productFound, setProductFound] = useState('');
    const [inputValue, setInputValue] = useState('');

    const getInputValue = event => {
        setInputValue(event.target.value);
    }

    const foundProduct = () => {
        const url = `http://localhost:1111/productos?field=nombre&value=${inputValue}`;
        getData(url).then(response => {
            if (!response && response.length === 0) {
                return;
            }
            console.log(response[0].nombre);
            setProductFound(response[0].nombre);
        }).catch(error => {
            console.error('Error fetching products:', error);
            setProductFound('No hay resultados');
        });
    }

    return(
        <>
            <NavBar/>
            <section className="section-found-stock">
                <TextField.Root>
                    <TextField.Input
                        color="green"
                        variant="soft"
                        name="product"
                        placeholder="Buscar stock"
                        value={inputValue}
                        onChange={getInputValue}
                    />
                    <IconButton color="green" variant="soft" onClick={foundProduct}>
                        <MagnifyingGlassIcon height="16" width="16"/>
                    </IconButton>
                </TextField.Root>

                <ul>
                    <li>{productFound}</li>
                </ul>

            </section>
        </>
    )
}