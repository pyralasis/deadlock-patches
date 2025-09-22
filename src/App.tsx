import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./Home";
import { PatchNotes } from "./PatchNotes"
import { PatchHistory } from './PatchHistory';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patch-notes" element={<PatchNotes />} />
        <Route path="/hero-history" element={<PatchHistory />} />
      </Routes>
    </Router>
  );
}

export default App
