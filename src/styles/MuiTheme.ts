import { createTheme, ThemeOptions } from "@mui/material"

const defaultTheme: ThemeOptions = createTheme({
    components: {
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            whiteSpace: 'nowrap'
          }
        }
      },
      MuiGrid: {
        styleOverrides: {
          item: {
            paddingTop: '0!important',
            paddingLeft: '0!important'
          }
        }
      }
    }
})

export default defaultTheme;