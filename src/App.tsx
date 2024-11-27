import { Button, TextField, Stack, Box, Checkbox, Typography, Link } from '@mui/material';
import { CssBaseline } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import AppTheme from './AppTheme';
import { GoogleIcon, FacebookIcon } from './AppIcon';
import ColorSchemeSelectIcon from './AppColorSelectIcon';

const App = () => {
   return (
      <AppTheme>
         <Box 
            sx={{position: 'fixed', top:'1rem', right: '1rem'}}
         >
            <ColorSchemeSelectIcon />
         </Box>
         <Box
            sx={{
               padding: '2rem',
               maxWidth: '400px',
               margin: 'auto',
               marginTop: '10vh',
               border: '1px solid #eee',
               borderRadius: '16px',
               boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
            }}
         >
            <Stack spacing={2} useFlexGap>
               <CssBaseline />
               <Typography variant='h1' sx={{ fontSize: '2rem', fontWeight: '500' }}>
                  Sign in
               </Typography>
               <TextField
                  required
                  type='email'
                  label="Email"
                  placeholder='exmaple@gmail.com'
                  fullWidth
                  autoFocus
                  id='email'
                  name='email'
                  autoComplete='email'
               />
               <TextField
                  required
                  type='password'
                  label="Password"
                  placeholder='********'
                  fullWidth
                  id='password'
                  name='password'
               />
               <FormControlLabel
                  control={<Checkbox />}
                  label='Remember me'
                  sx={{
                     marginLeft: "-12px",
                     "& .MuiFormControlLabel-label": {
                        userSelect: "none"
                     }
                  }}
               />
               <Button type='submit' variant='contained'>
                  Sign in
               </Button>
               <Typography
                  component='div'
                  variant='body2'
                  sx={{
                     textAlign: 'center'
                  }}
               >
                  Don&apos;t have an account? {' '}
                  <span>
                     <Link href='sign-up' variant='body2'>
                        Sign up
                     </Link>
                  </span>
               </Typography>
               <Divider sx={{ fontSize: '0.8rem' }}>or</Divider>
               <Button
                  variant='outlined'
                  startIcon={<GoogleIcon />}
               >
                  Sign in with google
               </Button>
               <Button
                  variant='outlined'
                  startIcon={<FacebookIcon />}
               >
                  Sign in with facebook
               </Button>
            </Stack>
         </Box>
      </AppTheme>
   )
}

export default App;
