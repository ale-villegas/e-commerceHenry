import { useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ACTION_TYPES, GlobalContext } from "../context/GlobalContext";

const useLocalStorage = (dispatch, cartItems) => {

    

    

    const getCartItemsFromLocalStorage = () => {
        const storedCartItems = localStorage.getItem(user.email);
        const parseItems = JSON.parse(storedCartItems) || [];
        dispatch({
            type: ACTION_TYPES.SET_LOCAL_STORAGE,
            payload: parseItems
        })
    };

    const addItemToLocalStorage = (item) => {
        const updatedCart = [...cartItems, item];
        localStorage.setItem(user.email, JSON.stringify(updatedCart));
        
    }
useEffect(() => {
    if(!isLoading)
    getCartItemsFromLocalStorage()
}, [user])

    return {
        addItemToLocalStorage
    }
} 


export default useLocalStorage