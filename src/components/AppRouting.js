import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MiNav} from './NavBar';
import {MiFooter} from './FooterBar';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import Home from './Home';

export const AppRouting = () => {
    return <BrowserRouter>
                <MiNav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
                    {/* <Route path="/categoria/:categoria" element={<ItemListContainer/>}/> */}
                    <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
                    {/* <Route path="/item/:id" element={<ItemDetailContainer/>}/> */}
                </Routes>
                <MiFooter/>
            </BrowserRouter>
}