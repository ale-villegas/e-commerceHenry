import axios from "axios"

const getGuitarrasByFilter = async (filtrosActivos) => {
    const {data} =  await axios.get(`http://localhost:3001/guitarras/filtros?categorias=[${filtrosActivos}]`)
    return data.guitarras
} 


export default getGuitarrasByFilter