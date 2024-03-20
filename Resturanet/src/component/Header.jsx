import React from 'react'
import {Typography , Box , AppBar , Toolbar, IconButton , Drawer , Divider} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link , NavLink} from "react-router-dom"
import "../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import "../styles/HomeStyles.css"

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <Typography variant='h6' component="div" sx={{ flexGrow: 1 , my: 2}}>Restaurant</Typography>
      <Divider></Divider>
          <ul className='mobile-navigation'>
            <li>
              <li to={"/"}>Home</li>
              <li to={"/about"}>About</li>
              <li to={"/contact"}>Contact</li>
              <li to={"/menu"}>Menu</li>
            </li>
          </ul>
        </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={"nav"} sx={{bgcolor: "black"}}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{mr: 2, display: {sm: "none"}}}
          onClick={handleDrawerToggle}>
            <MenuIcon></MenuIcon>
          </IconButton>
          <FastfoodIcon/>
        <Typography variant='h6' sx={{ flexGrow: 1}}>Restaurant</Typography>
        <Box sx={{display:{xs:"none", sm: "block"}}}>
          <ul className='navigation-menu'>
            <li>
              <NavLink activeClassName="active" to={"/"}>Home</NavLink>
              <NavLink activeClassName="active" to={"/about"}>About</NavLink>
              <NavLink activeClassName="active" to={"/contact"}>Contact</NavLink>
              <NavLink activeClassName="active" to={"/menu"}>Menu</NavLink>
            </li>
          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
        sx={{display: {xs: "block" , sm: "none"}, "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "240px",
        }}}>{drawer}</Drawer>
      </Box>
      <Box>
        <Toolbar></Toolbar>
      </Box>
    </Box>
    </>
  )
}

export default Header
