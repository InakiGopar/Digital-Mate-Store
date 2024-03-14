import { DropdownMenu, DropdownMenuItem } from "@radix-ui/themes";
import { useProducts } from '../hooks/useProducts';

export function ProductsByCategory( {url} ) {
    const { products, loadng, error } = useProducts(url);


    return(
        <DropdownMenu.Content variant="soft" color="green">
                {products.map(product=>(
                    <DropdownMenuItem color="green" key={product.id_producto}>
                        {product.nombre}
                    </DropdownMenuItem>
                ))}
        </DropdownMenu.Content>
    )
}