import { Link } from "react-router-dom";
import './styles/NotFound.css';

export function NotFound() {
    return(
        <section>
            <h1>Opps that's embarrassing 404 error</h1>
            <figure>
                <img src="https://live.staticflickr.com/1270/4691481993_b698f84676_b.jpg" alt="404 image" />
            </figure>
            <Link to='/'>Back to home</Link>
        </section>
    )
}