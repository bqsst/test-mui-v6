import { ThemeProvider, createTheme, Box } from "@mui/material";
import React from "react";
import '@fontsource-variable/inter';

const theme = createTheme({
   colorSchemes: {
      light: {
         palette: {
            primary: {
               main: '#262626',
            },
            grey: {
               '50': '#fafafa',
               '100': '#f4f4f5',
               '200': '#e4e4e7',
               '300': '#d4d4d8',
               '400': '#a1a1aa',
               '500': '#71717a',
               '600': '#52525b',
               '700': '#3f3f46',
               '800': '#27272a',
               '900': '#18181b',
            },
            background: {
               default: '#f5f5f5',
            }
         },
      },
      dark: {
         palette: {
            grey: {
               '50': '#fafafa',
               '100': '#f4f4f5',
               '200': '#e4e4e7',
               '300': '#d4d4d8',
               '400': '#a1a1aa',
               '500': '#71717a',
               '600': '#52525b',
               '700': '#3f3f46',
               '800': '#27272a',
               '900': '#18181b',
            },
            background: {
               default: '#121212',
            }
         },
      },
   },
   typography: {
      fontFamily: "'Inter Variable', 'sans-serif'",
   },
   shape: {
      borderRadius: 10,
   },
   components: {
      MuiButton: {
         styleOverrides: {
            root: ({ theme }) => ({
               textTransform: 'none',
               variants: [
                  {
                     props: { variant: 'contained', color: 'primary' },
                     style: {
                        border: `1px solid ${theme.palette.primary.main}`,
                        boxShadow: 'none',
                        '&:hover': {
                           boxShadow: 'none'
                        }
                     }
                  },
                  {
                     props: { variant: 'outlined', color: 'primary' },
                     style: {
                        borderColor: theme.palette.grey[300],
                        '&:hover': {
                           borderColor: theme.palette.grey[400],
                        },
                        ...theme.applyStyles('dark', {
                           borderColor: theme.palette.grey[700],
                           '&:hover': {
                              borderColor: theme.palette.grey[600],
                           }
                        })
                     }
                  }
               ]
            })
         }
      },
      MuiTextField: {
         styleOverrides: {
            root: ({ theme }) => ({
               '& fieldset': {
                  borderColor: theme.palette.grey[300],
               },
               '& .MuiOutlinedInput-root:not(.Mui-focused): hover fieldset': {
                  borderColor: theme.palette.grey[400],
               },
               ...theme.applyStyles('dark', {
                  '& fieldset': {
                     borderColor: theme.palette.grey[700],
                  },
                  '& .MuiOutlinedInput-root:not(.Mui-focused): hover fieldset': {
                     borderColor: theme.palette.grey[600],
                  }
               })
            })
         }
      },
      MuiCheckbox: {
         defaultProps: {
            icon: (
               <Box //repace default checkbox from mui
                  sx={(theme) => ({
                     borderRadius: '8px',
                     width: '1.5rem',
                     height: '1.5rem',
                     border: '2px solid transparent',
                     boxShadow: `inset 0px 0px 0px 1px ${theme.palette.grey[300]}`,
                     ...theme.applyStyles('dark', {
                        boxShadow: `inset 0px 0px 0px 1px ${theme.palette.grey[700]}`,
                     })
                  })}
               />
            )
         },
         styleOverrides: {
            root: {
               '&:hover': {
                  backgroundColor: 'initial',
               }
            }
         }
      }
   }
})

const AppTheme = ({ children }: React.PropsWithChildren) => {
   return (
      <ThemeProvider theme={theme}>
         {children}
      </ThemeProvider>
   )
}

export default AppTheme;
export { theme };
