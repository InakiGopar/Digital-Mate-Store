import { Flex, Table, Button, Heading } from "@radix-ui/themes";
import './styles/Products.css';
import { NavBar } from "./NavBar";
import { usePagination } from "../hooks/usePagination";



export function Products() {
    const {  products, loading, error, page, turnPage, previousPage  } = usePagination();

    return(
        <>  
            <NavBar/>
            <section className="section-products">
                <Heading size='8' color="teal">Productos</Heading>
                {loading && <p>Loading...</p>}
                {error ? (
                    <h4>opss algo salio mal</h4>
                ) : (
                    <>
                        <Table.Root>
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeaderCell>Producto</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Material</Table.ColumnHeaderCell>    
                                    <Table.ColumnHeaderCell>Color</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Precio</Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {products.map(product => (
                                <Table.Row key={product.id_producto}>
                                    <Table.Cell >{product.nombre}</Table.Cell>
                                    <Table.Cell >{product.material}</Table.Cell>
                                    <Table.Cell >{product.color}</Table.Cell>
                                    <Table.Cell >{product.precio}</Table.Cell>
                                </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                        <Flex gap='5'>
                            {page > 1 && <Button color='jade' variant='solid' onClick={previousPage}>Anterior</Button>}
                            <Button color='jade' variant='solid' onClick={turnPage}>Siguiente</Button>
                        </Flex>
                    </>
                )}
            </section>
        </>
    )
}