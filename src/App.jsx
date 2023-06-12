import './App.scss';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Grow from './components/GrowPlants/Grow';
import Popular from './components/Popular/Popular';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Grow />
      <Popular />
    </div>
  );
}

export default App;
