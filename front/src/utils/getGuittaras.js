import axios from "axios"

const getGuitarras = async () => {
    const {data} =  await axios.get(`https://backecommercehenry-production.up.railway.app/guitarras`)
    const conCantidad = data.guitarras.map((guitarra)=> {
        return {
            ...guitarra,
            quantity: 1
        }
    } ) 
    return conCantidad
} 


export default getGuitarras