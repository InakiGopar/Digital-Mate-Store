import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import './styles/Home.css';


export function Home() {
    return(
        <>  
            <NavBar/>
            <section className="home-section">
                <h1>Mate datos</h1>

                <p>
                    ¡Bienvenido a nuestra tienda de mates online! Descubre una amplia selección de mates de alta calidad
                    y accesorios para disfrutar de esta tradicional infusión sudamericana. Explora nuestras diversas
                    categorías y encuentra el mate perfecto para ti, desde clásicos mates de calabaza hasta modernos
                    mates de silicona. Conoce más sobre la cultura del mate y encuentra todo lo que necesitas
                    para disfrutar de esta experiencia única. ¡Haz de cada mate un momento especial con nuestra
                    tienda en línea!
                </p>
                
            </section>
            <Footer/>
        </>
    )
}