import './App.css';
import {MiNav} from './components/NavBar';
import {MiFooter} from './components/FooterBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
    return (
        <>
            <MiNav/>
            <ItemListContainer/>
            <MiFooter/>
        </>
    )
}

export default App;