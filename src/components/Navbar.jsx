import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
    return (
        <Box>
            <AppBar position="fixed" color="error">
              <Toolbar>
                <Typography variant="h6">
                  <span className="logo">No/Sense</span> <span className="logo">News</span>
                </Typography>
              </Toolbar>
            </AppBar>
        </Box>
    )
}