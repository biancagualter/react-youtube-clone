import React from 'react'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    
  }
})

function App() {
  const theme = createMuiTheme({

  })

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>

      </div>
    </ThemeProvider>
  )
}

export default App
