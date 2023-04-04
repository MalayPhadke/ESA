import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import { useState } from 'react';
import TechnoHunt from "./components/TechnoHunt";
import Events from './Events';
import InnovationCup from './components/InnovationCup';

function App() {
  const [renderTeam, setRenderTeam] = useState(false);

  return (
    <div className="App">
      <Navbar setRenderTeam={setRenderTeam}/>
        <Routes>
          <Route
            path='/'
            element={<Home renderTeam={renderTeam} setRenderTeam={setRenderTeam}/>}
          />

          <Route
          path="/techno-hunt"
          element={<TechnoHunt />}
          />
          <Route
          path="/innovation"
          element={<InnovationCup />}
          />
          
          <Route
          path="/all-events"
          element={<Events />}
          />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
