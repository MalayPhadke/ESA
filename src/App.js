import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import { useState } from 'react';

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
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
