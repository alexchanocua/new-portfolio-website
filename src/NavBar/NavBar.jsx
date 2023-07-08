import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar 
        position="static"
        sx={{
            backgroundColor:'white', 
            border: 'none', 
            color:'black', 
            boxShadow: '0 0 10px rgba(0,0,0,.09)',
        }}    
    >
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
          alejandrochanocua.com
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar