import './App.scss';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Grow from './components/GrowPlants/Grow';
import Popular from './components/Popular/Popular';
import Trending from './components/Trending/Trending';
import Garden from './components/Gardening/Garden';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Grow />
      <Popular />
      <Trending />
      <Garden />
      <Footer />
    </div>
  );
}

export default App;
