import './styles/Categories.css';
import { Box, Grid, Button, DropdownMenu, Card, Inset } from "@radix-ui/themes";
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useCategories } from "../hooks/useCategories";
import { NavBar } from "./NavBar";
import { Img } from './Img';
import { Error } from './Error';
import { ProductsByCategory } from './ProductsByCategory';
import { Footer } from './Footer';

export function Categories() {
    
    const url = 'http://localhost:1111/categorias';
    const { categories, loading, error }  = useCategories(url);
    const productsUrl = 'http://localhost:1111/productos?field=id_categoria&value=';

    return(
        <>
            <NavBar/>
            <section className="section-categories">
                {loading && <p>Loading...</p>}
                {error ? (<Error/>) :
                (
                    <Grid columns= {{initial: '1', md: '3'}} gap='6' width='auto'>
                        {categories.map(category => (
                            <Box height='auto'  key={category.id_categoria}>
                                <section className='categories-container'>
                                    <Card size="2" style={{ maxWidth: 240 }}>
                                        <Inset clip="padding-box" side="top" pb="current">
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
                                        </Inset>
                                    </Card>
                                </section>
                            </Box>
                        ))}
                    </Grid>
                )}
            </section>
            <Footer/>
        </>
    )
}