// this file is not use, just for example of basic color mode toggle
import { MenuItem, Select } from "@mui/material";
import { useColorScheme } from "@mui/material";

const ColorModeToggle = () => {
   const { mode, setMode } = useColorScheme();

   if(!mode){
      return null;
   }

   return (
      <Select
         value={mode}
         onChange={(e) => setMode(e.target.value as 'system' | 'light' | 'dark')}
         sx={{ position: 'fixed', top: '1rem', right: '1rem' }}
      >
         <MenuItem value='system'>System</MenuItem>
         <MenuItem value='light'>Light</MenuItem>
         <MenuItem value='dark'>Dark</MenuItem>
      </Select>
   )
}

export default ColorModeToggle
