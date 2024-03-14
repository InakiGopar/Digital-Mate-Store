import './styles/Categories.css';
import { Box, Grid, Button, DropdownMenu } from "@radix-ui/themes";
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useCategories } from "../hooks/useCategories";
import { NavBar } from "./NavBar";
import { Img } from './Img';
import { ProductsByCategory } from './ProductsByCategory';

export function Categories() {
    
    const url = 'http://localhost:1111/categorias';
    const { categories }  = useCategories(url);
    const productsUrl = 'http://localhost:1111/productos?field=id_categoria&value=';

    return(
        <>
            <NavBar/>
            <section className="section-categories">
                <Grid columns='3' gap='3' width='100%'>
                    {categories.map(category => (
                        
                        <Box height='auto'  key={category.id_categoria}>
                            <article className='categories-container'>  
                                <h4>{category.categoria}</h4>
                                <Img imgUrl={category.categoria}/>
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant='soft' color='green'>
                                            Ver productos
                                            <CaretDownIcon width="12" height="12"/>
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <ProductsByCategory
                                        url={productsUrl + category.id_categoria}
                                    />
                                </DropdownMenu.Root>
                            </article>
                        </Box>
                    ))}
                </Grid>
            </section>
        </>
    )
}