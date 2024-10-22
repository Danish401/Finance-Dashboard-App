import { useMemo } from "react";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles"; // Use MUI's ThemeProvider instead of "@emotion/react"
import { CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./scenes/navbar";
// App.tsx
import Dashboard from "@/scenes/dashboard";
import Predictions from "./scenes/predictions";
function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem  2rem">
            <Navbar />
            {/* Routes or other content can go here */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
