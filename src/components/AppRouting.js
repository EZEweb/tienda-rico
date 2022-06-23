import {
        BrowserRouter,
        Routes,
        Route,
        useParams,
        useNavigate,
  } from "react-router-dom";
import {MiNav} from './NavBar';
import {MiFooter} from './FooterBar';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import Home from './Home'

export const AppRouting = () => {
    return <BrowserRouter>
                <MiNav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
                    <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
                </Routes>
                <MiFooter/>
            </BrowserRouter>
}

// <Route path="/ItemListContainer" element={<ItemListContainer/>}><h2>ir a la lista</h2></Route>
// <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>}><h2>ir al detalle</h2></Route>