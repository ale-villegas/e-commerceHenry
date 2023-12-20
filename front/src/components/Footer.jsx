import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
   <AppBar position='static'>
    <Toolbar sx={{
         width : "100%",
         display: "flex",
         alignContent: "center", 
         justifyContent: "center",
         
    }}>
        <Typography fontSize={12}>Proyecto de E-Commerce de Codo a Codo con soy Henry, grupo 3</Typography>
    </Toolbar>
   </AppBar> 
  )
}

export default Footer