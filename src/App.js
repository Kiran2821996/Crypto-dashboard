
import './App.css';

import Trending from './components/Trending';
import News from './components/News';
import CoinList from './components/CoinList';


function App() {
  return (
    <div >
     <CoinList/>
      <Trending/>
     <News/>
    
    </div>
  );
}

export default App;
