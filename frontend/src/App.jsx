import { Routes, Route } from 'react-router-dom';
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { Products } from "./components/Products";
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { FoundStock } from './components/FoundStock';
import { Categories } from './components/Categories';


export function App() {
    

    return (
        <Theme>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/categorias' element={<Categories/>}/>
                    <Route path='/productos' element={<Products/>} />
                    <Route path='/found' element={<FoundStock/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </main>
        </Theme>
    )
}