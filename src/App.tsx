import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./Home";
import { PatchNotes } from "./PatchNotes"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patch-notes" element={<PatchNotes />} />
      </Routes>
    </Router>
  );
}

export default App
