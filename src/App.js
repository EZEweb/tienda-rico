import './App.css';
import {MiNav} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {MiFooter} from './components/FooterBar';

function App() {
  return (
    <>
      <MiNav/>;
      <ItemListContainer producto="afiche"/>;
      <MiFooter/>;
    </>
  )
}

export default App;