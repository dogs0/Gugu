import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './comp/Header';
import { Box, Card, CardContent, createTheme, ThemeProvider, type Theme } from '@mui/material';
import Home from './page/Home'
import About from './page/About'
import Tenet from './page/Tenet';
import GameIndex from './page/Games/GameIndex';
import { pages } from './page/Page'
var theme: Theme = createTheme();
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box paddingBottom={1}>
          <Header Title={"Gugu"} Items={
            pages
          } />
        </Box>
      </ThemeProvider>
      <Box>
        <Card elevation={1}>
          <CardContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tenet" element={<Tenet />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<GameIndex />} />
        </Routes>
        </CardContent>
        </Card>
        <footer>© 2025 Gugu</footer>
      </Box>
    </BrowserRouter>
  )
}

export default App
