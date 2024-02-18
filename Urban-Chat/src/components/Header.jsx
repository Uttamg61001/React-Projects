// import React, { useState } from 'react'
// import { Typography }from '@mui/material'
// import { AppBar, Toolbar, Button, Tabs, Tab, IconButton } from '@mui/material'

// function Header() {
//   const [value, setValue] = useState()
//   return (
//     <AppBar sx={{background: "linear-gradient(90deg, rgba(4, 13, 18, 0.50) 0%, rgba(4, 13, 18, 0.50) 100%)" , backdropFilter: "blur(200px)" , height: "102px" , flexShrink: "0"}}>
//       <Toolbar>
//       <Typography varient="h4">
//         <img src="Chat.png" alt="" /></Typography>
//       <Tabs sx={{margin: "auto" , display: "flex" , justifyContent: "center" , alignItems: "center"}} value={value} onChange={(e, val) => setValue(val)}
//       textColor='inherit' indicatorColor='secondary'>
//         <Tab label="My ChatBot" />
//         <Tab label="Preview" />
//         <Tab label="Invite" />
//         <Tab label="Pricing" />
//         <Tab label="Integrates" />
//       </Tabs>
//       <IconButton sx={{}}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
//   <path d="M17.5 19.8333V20.9999C17.5 22.9329 15.933 24.4999 14 24.4999C12.067 24.4999 10.5 22.9329 10.5 20.9999V19.8333M17.5 19.8333H10.5M17.5 19.8333H21.6889C22.1352 19.8333 22.3594 19.8333 22.5401 19.7723C22.8853 19.6559 23.1554 19.3849 23.2718 19.0397C23.333 18.8583 23.333 18.6334 23.333 18.1835C23.333 17.9867 23.3328 17.8883 23.3174 17.7945C23.2883 17.6171 23.2194 17.449 23.1146 17.303C23.0593 17.2259 22.9889 17.1555 22.8501 17.0167L22.3957 16.5623C22.249 16.4157 22.1667 16.2168 22.1667 16.0094V11.6666C22.1667 7.15627 18.5103 3.49993 14 3.49994C9.48967 3.49995 5.83332 7.15629 5.83332 11.6666V16.0094C5.83332 16.2168 5.75077 16.4157 5.60415 16.5623L5.14973 17.0167C5.01054 17.1559 4.94087 17.2258 4.88541 17.3031C4.78059 17.449 4.71116 17.6171 4.68206 17.7945C4.66666 17.8883 4.66666 17.9867 4.66666 18.1836C4.66666 18.6334 4.66666 18.8582 4.72785 19.0396C4.84428 19.3848 5.11559 19.6559 5.46076 19.7723C5.64148 19.8333 5.86484 19.8333 6.31114 19.8333H10.5" stroke="#EAEAEC" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
//       </IconButton>
//       <Button variant='contained' sx={{display: "inline-flex" , justifyContent: "center" ,
//        alignItems: "center" , padding: "17px 16px" , gap: "10px" , margin: "22px"
//       , background: "background: var(--ACCENT-COLOUR-500, #05668D)" , borderRadius: "100px"}}
//       >Login / Sign Up</Button>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Header
