import { Box, AppBar, Toolbar, Typography, List, ListItem, FormControl, FormLabel, FormHelperText, OutlinedInput, IconButton } from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { getTopNews } from "../apiQuery";
export default function Navbar() {
    return (
        <Box>
            <AppBar position="static" color="primary" className="p-4">
              <Toolbar className="flex justify-between">
                <Typography variant="h2" >
                  <span className="logoColor">No/\/Sense</span> <span className="logoColor">News</span>
                </Typography>
                
                    
              </Toolbar>
            </AppBar>
        </Box>
    )
}