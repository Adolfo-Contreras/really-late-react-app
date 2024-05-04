import { Box, AppBar, Toolbar, Typography, Button, Link } from "@mui/material";
export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" color="primary" className="p-4">
        <Toolbar className="flex justify-between">
          <Link href="/" underline="none">
            <Typography variant="h2">
              <span className="logoColor">No/\/Sense</span>
              <span className="logoColor"> News</span>
            </Typography>
          </Link>
          <Link href="/all">
            <Button variant="contained" color="darkGreen">
              Search All
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
