import { Box, AppBar, Toolbar, Typography, List, ListItem, FormControl, FormLabel, FormHelperText, OutlinedInput, IconButton } from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
export default function Navbar() {
    return (
        <Box>
            <AppBar position="static" color="secondary" className="p-4">
              <Toolbar className="flex justify-between">
                <Typography variant="h2" >
                  <span className="logoColor">No/\/Sense</span> <span className="logoColor">News</span>
                </Typography>
                
                    <FormControl>
                      <FormLabel></FormLabel>
                      <OutlinedInput placeholder="Search" endAdornment={<IconButton><SearchSharpIcon/></IconButton>}></OutlinedInput>
                      <FormHelperText></FormHelperText>
                    </FormControl>
              </Toolbar>
            </AppBar>
        </Box>
    )
}