import './App.css';
import {MiNav} from './components/NavBar';
import {MiFooter} from './components/FooterBar';
// import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <>
            <MiNav/>
            {/* <ItemListContainer/> */}
            <ItemDetailContainer/>
            <MiFooter/> 
        </>
    )
}

export default App;