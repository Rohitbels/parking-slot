import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";

const MenuAppBar = ({ companyName, userName, onLogout }) => {
  const n = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Company Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {companyName}
        </Typography>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {/* Logged-in User Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {userName}
        </Typography>
        
        {/* Logout Button */}
        <Button color="inherit" sx={{ flex: 1 }} onClick={() => {
            n('/login')
        }}>
          Logout
        </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;
