import React from 'react'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'

import Home from './components/Home'

const useStyles = makeStyles({
  root: {
    
  }
})

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3f51b5'
      }
    }
  })

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
