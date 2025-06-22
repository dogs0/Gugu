import * as React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './comp/Header';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Home from './page/Home'
import About from './page/About'
import { config } from './asset/config'
var theme = createTheme()
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box paddingBottom={1}>
          <Header Title={"Gugu"} Items={
            config['path']
          } />
        </Box>
      </ThemeProvider>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>© 2025 Gugu</footer>
      </Box>
    </BrowserRouter>
  )
}

export default App
