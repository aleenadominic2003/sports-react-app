import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';

// Add Components
import AddPlayer from './components/AddPlayer';
import AddCoach from './components/AddCoach';
import AddTeam from './components/AddTeam';

// View Components
import ViewPlayer from './components/ViewPlayer';
import ViewCoach from './components/ViewCoach';
import ViewTeam from './components/ViewTeam';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Add Pages */}
        <Route path="/add-player" element={<AddPlayer />} />
        <Route path="/add-coach" element={<AddCoach />} />
        <Route path="/add-team" element={<AddTeam />} />

        {/* View Pages */}
        <Route path="/view-player" element={<ViewPlayer />} />
        <Route path="/view-coach" element={<ViewCoach />} />
        <Route path="/view-team" element={<ViewTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;