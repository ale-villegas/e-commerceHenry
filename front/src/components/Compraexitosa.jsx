import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { ACTION_TYPES} from "../context/GlobalContext";



export const Compraexitosa = () => {

    const {dispatch} = useContext(GlobalContext)
     const navigate = useNavigate()

    useEffect(() => {
        dispatch({
            type: ACTION_TYPES.EMPTY_CART
          })
        setTimeout(() => {
            navigate("/home")
        }, 2000);  
      }, []);




  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '30vh', // Ajusta la altura como desees
      border: '2px solid green',
      borderRadius: '5px',
      padding: '20px',
      textAlign: 'center',
      color: 'green',
      marginTop: "100px"
    }}>
 <h3>Compra exitosa</h3>
    </div>
  )
}
