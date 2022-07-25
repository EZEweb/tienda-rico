import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MiNav} from './components/NavBar';
import {MiFooter} from './components/FooterBar';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';
import ConfirmarCompra from './components/ConfirmarCompra';
import Redes from "./components/Redes"

function App() {
    return (
        <BrowserRouter>
        <CartContextProvider>
        <MiNav/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/redes" element={<Redes/>}/>
                <Route path="/confirmarcompra" element={<ConfirmarCompra/>}/>
            </Routes>
        <MiFooter/>
        </CartContextProvider>
        </BrowserRouter>
    )
}

export default App;