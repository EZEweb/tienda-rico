import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MiNav} from './components/NavBar';
import {MiFooter} from './components/FooterBar';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';
import Categoria from './components/Categoria';

function App() {
    return (
        <BrowserRouter>
        <CartContextProvider>
        <MiNav/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:categoria" element={<Categoria/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                
            </Routes>
        <MiFooter/>
        </CartContextProvider>{/* acá le asigno el super poder del context a los hijes de cartContext */}
        </BrowserRouter>
    )
}

export default App;