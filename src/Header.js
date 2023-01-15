import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {CircularProgress,Grid,InputAdornment,TextField, Button} from "@mui/material";
import { Search, SentimentDissatisfied } from "@mui/icons-material";
import './Header.css';


export default function SearchAppBar() {
    return (
      <Box sx={{ flexGrow: 1 ,backgroundColor:"white"}}>
        <AppBar position="static" style={{backgroundColor:"white", color:"black"}} elevation={1} className="header">
          <Toolbar style={{padding:"0"}}>
          <IconButton
            className="mobile"
              size="large"
              edge="start"
              color="black"
              aria-label="open drawer"
              sx={{ marginRight:"0.5rem"}}
            >
              <MenuIcon />
            </IconButton>
            <img src="Clogo.svg.png" style={{height:"22px", width:"22px", marginRight:"0.5rem"}}/>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { sm: 'block' } , textAlign:"left"}}
            >
              Crypto Tracker
            </Typography>
            <TextField 
                className="search-desktop"
                size="small"
                variant="standard"
                InputProps={{
                    className: 'search',
                    style:{padding:'0', border:"0"},
                    disableUnderline: true,
                    endAdornment: (
                    <InputAdornment position="end" >
                        <Search  style={{color:"black"}}/>
                    </InputAdornment>
                    ), 
                } }
            />
            <IconButton
            className="desktop"
              size="large"
              edge="start"
              color="black"
              aria-label="open drawer"
              sx={{ }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }