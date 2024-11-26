import { Button, TextField, Stack, Box, Checkbox, Typography, Link } from '@mui/material';
import { CssBaseline } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

const App = () => {
   return (
      <Box
         sx={{
            padding: '2rem',
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '10vh',
            border: '1px solide #eee',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
         }}
      >
         <Stack spacing={2} useFlexGap>
            <CssBaseline />
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
         </Stack>
      </Box>
   )
}

export default App;
