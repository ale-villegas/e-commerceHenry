import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Box } from '@mui/system'
import { Button, CircularProgress, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {

const {isAuthenticated, isLoading, loginWithRedirect, logout, user} = useContext(GlobalContext)

  return (
<Box sx={{
marginTop: "80px",
width: "100%",
height: "80vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
flexDirection: { xs: "column", md: "row" }
}}>

{isLoading  &&  <CircularProgress color="inherit" sx={{marginTop : "10px"}} size={40} thickness={4} /> }

{
    !isLoading && isAuthenticated  ? 
    <Box sx={{
        display: "flex",
      
        gap: "30px",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly"
    }}>
    <img src='https://img.freepik.com/foto-gratis/rollo-estudio-banda-diapason-madera_1172-290.jpg?w=360&t=st=1703014528~exp=1703015128~hmac=ab9a819c13a2e7dcf98748e12a2d15183eb2e209b80f96663df5ba7a5ffc1fab ' style={{
        height: "80vh",
        borderRadius :" 10px",
     
      
    }}/>
<Box sx={{
    display: "flex", 
    flexDirection: "column",
    width: "50%",
    gap: "20px"
}}>
    <Typography fontSize="30px">
        Bienvenido/a <b>{user.given_name}</b> 
        
    </Typography>
  <Link to="/home"><Button variant='contained'> Ingresa al catalogo de guitarras</Button></Link>
    </Box>
    </Box> : 
    
    
    !isLoading &&
   <Box sx={{
    display: "flex",
    gap: "30px",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly"
}}>
<img src='https://img.freepik.com/foto-gratis/rollo-estudio-banda-diapason-madera_1172-290.jpg?w=360&t=st=1703014528~exp=1703015128~hmac=ab9a819c13a2e7dcf98748e12a2d15183eb2e209b80f96663df5ba7a5ffc1fab ' style={{
    height: "80vh",
    borderRadius :" 10px",
 
  
}}/>
<Box sx={{
display: "flex", 
flexDirection: "column",
width: "50%",
textAlign: "justify"

}}>
<Typography fontSize="30px">
    Hola <b>extraño</b>, si quieres hacer una compra por favor inicia sesion
</Typography>
<Button variant='contained' onClick={() => loginWithRedirect()}> Iniciar sesion</Button>
</Box>
</Box>
}
    </Box>
  )
}

export default Login 


