import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import '@fontsource-variable/inter';

const theme = createTheme({
   palette: {
      background: {
         default: '#f5f5f5',
      }
   },
   typography: {
      fontFamily: "'Inter Variable', 'sans-serif'",
   }
})

const AppTheme = ({ children }: React.PropsWithChildren) => {
   return(
      <ThemeProvider theme={theme}>
         {children}
      </ThemeProvider>
   )
}

export default AppTheme;
