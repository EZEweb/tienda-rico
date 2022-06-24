import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MiNav} from './NavBar';
import {MiFooter} from './FooterBar';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import Home from './Home';
// import { FiltroApp } from './FiltroApp';

export const AppRouting = () => {
    return <BrowserRouter>
                <MiNav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
                    <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
                    {/* <Route path="/FiltroApp" element={<Home/>}/> */}
                </Routes>
                <MiFooter/>
            </BrowserRouter>
}