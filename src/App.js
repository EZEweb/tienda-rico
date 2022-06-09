import './App.css';
import {MiNav} from './components/NavBar';
import {MiItemListContainer} from './components/ItemListContainer';
import {MiFooter} from './components/FooterBar';

function App() {
  return (
    <>
      <MiNav/>;
      <MiItemListContainer producto="afiche"/>;
      <MiFooter/>;
    </>
  )
}

export default App;