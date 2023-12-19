import axios from "axios"

const getGuitarrasByFilter = async (filtrosActivos) => {
    const {data} =  await axios.get(`https://backecommercehenry-production.up.railway.app/guitarras/filtros?categorias=[${filtrosActivos}]`)
    return data.guitarras.map((guitarra) => {
        return {
            ...guitarra,
            quantity: 1
        }
    })
} 


export default getGuitarrasByFilter