import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Box, CssBaseline } from '@mui/material';
import './index.css';
import './app.css';

const Home = lazy(() => import('./Home'));
const PatchNotes = lazy(() => import('./PatchNotes'));
const PatchHistory = lazy(() => import('./PatchHistory'));

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Suspense fallback={
          <Box
            width="100vw"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: '#000', color: '#fff' }}
          >
            Loading...
          </Box>
        }>
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
