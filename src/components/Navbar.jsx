import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
    return (
        <Box>
            <AppBar position="fixed" color="error">
              <Toolbar>
                <Typography variant="h6">
                  <span>No/Sense</span> News
                </Typography>
              </Toolbar>
            </AppBar>
        </Box>
    )
}