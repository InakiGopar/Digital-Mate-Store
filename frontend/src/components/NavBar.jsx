import { Link } from "react-router-dom";
import './styles/NavBar.css';

export function NavBar() {
    return(
        <nav>
            <ul>
                <figure className="icon">
                    <img src="public/img/icono.webp" alt="mate datos icon" />
                </figure>
                <Link to='/'>Home</Link>
                <Link to='/categorias'>Categorias</Link>
                <Link to='/productos'>Productos</Link>
                <Link to='/found'>Encontra lo que queres</Link>
            </ul>
        </nav>
    )
}