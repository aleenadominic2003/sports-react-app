import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddPlayer from "./components/AddPlayer";

import AddCoach from "./components/AddCoach";

import AddTeam from "./components/AddTeam";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add-player" element={<AddPlayer />} />
    
        <Route path="/add-coach" element={<AddCoach />} />
    

        <Route path="/add-team" element={<AddTeam />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;