import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from "@mui/material/styles";

import HomePage from './pages/HomePage';

// customize look
export const theme = createTheme({
  typography: {
    fontFamily: "calibri light, sans serif",
  }
});

// App is the root component of our app
// React Router's BrowserRouter and Routes components to define the pages
// Each Route component representing a page
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}