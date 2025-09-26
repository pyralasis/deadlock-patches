import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CssBaseline } from '@mui/material';
import './index.css';
import './App.css';
import FullScreenLoader, { useAppPreloader } from './FullScreenLoader';

const Home = lazy(() => import('./Home'));
const PatchNotes = lazy(() => import('./PatchNotes'));
const PatchHistory = lazy(() => import('./PatchHistory'));

function App() {
  const ready = useAppPreloader();

  if (!ready) return <FullScreenLoader />;

  return (
    <>
      <CssBaseline />
      <Router>
        <Suspense fallback={<FullScreenLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patch-notes" element={<PatchNotes />} />
            <Route path="/hero-history" element={<PatchHistory />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}


export default App
