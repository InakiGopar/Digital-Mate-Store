import { Link } from "react-router-dom";

export function NotFound() {
    return(
        <section>
            <h1>Opps that's embarrassing 404 error</h1>
            <Link to='/'>Back to home</Link>
        </section>
    )
}