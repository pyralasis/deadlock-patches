import { useMediaQuery, useTheme } from '@mui/material';
import './App.css'
import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  if (!isMobile)
    return (
      <DesktopLayout />
    );
  else
    return (
      <MobileLayout />
    );
}

export default App
