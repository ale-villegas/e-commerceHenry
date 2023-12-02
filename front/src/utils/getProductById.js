import axios from "axios"
const getProductById = async (id) => {
    
    const response = await axios.get(`http://localhost:3001/guitarras/${id}`)

    return response.data
}

export default getProductById