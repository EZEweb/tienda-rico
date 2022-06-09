import './App.css';
import {MiNav} from './components/NavBar';
import {MiItemListContainer} from './components/ItemListContainer';
import {MiFooter} from './components/FooterBar';

function App() {
  return (
    <div>
      <MiNav/>;
      <MiItemListContainer/>;
      <MiFooter/>;
    </div>
  )
}

export default App;