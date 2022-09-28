import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Router from './router';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme} from '@mui/material';
import useLocalStorage from 'use-local-storage';
import "./App.css"

function App() {
  const [bool,setBool]=useLocalStorage("mode",false)
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: bool ? "dark" : "light"
        },
      }),
    [bool],
  );


  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Router/>
    </ThemeProvider>
    </>
  );
}



export default App;
