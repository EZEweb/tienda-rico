import './App.css';
import {MiNav} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {Contador} from './components/Contador';
import {MiFooter} from './components/FooterBar';

function App() {
  return (
    <>
      <MiNav/>;
      <ItemListContainer producto="afiche"/>;
      <Contador/>;
      <MiFooter/>;
    </>
  )
}

export default App;