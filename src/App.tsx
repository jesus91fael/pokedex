import React from "react"
import Home from "./pages/Home"
import GlobalStyle from "./styles/global"
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
