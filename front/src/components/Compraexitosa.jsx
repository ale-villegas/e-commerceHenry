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
    <div>gracias por su compra!!!</div>
  )
}
