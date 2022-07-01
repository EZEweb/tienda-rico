import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MiNav} from './components/NavBar';
import {MiFooter} from './components/FooterBar';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <BrowserRouter>
        <MiNav/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/Home" element={<Home/>}/>
            </Routes>
        <MiFooter/>
        </BrowserRouter>
    )
}

export default App;