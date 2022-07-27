import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavBar} from './components/NavBar';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';
import About from './components/About';
import ConfirmarCompra from './components/ConfirmarCompra';
import Redes from "./components/Redes"

function App() {
    return (
        <BrowserRouter>
        <CartContextProvider>
            <Routes>
                <Route path="/Nav" element={<NavBar/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
                <Route path="/itemlistcontainer" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/tienda-rico" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/redes" element={<Redes/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="/confirmarcompra" element={<ConfirmarCompra/>}/>
            </Routes>

        </CartContextProvider>
        </BrowserRouter>
    )
}

export default App;