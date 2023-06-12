import './App.scss';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Grow from './components/GrowPlants/Grow';
import Popular from './components/Popular/Popular';
import Trending from './components/Trending/Trending';
import Garden from './components/Gardening/Garden';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Grow />
      <Popular />
      <Trending />
      <Garden />
    </div>
  );
}

export default App;
