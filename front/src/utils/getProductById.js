import axios from "axios"
const getProductById = async (id) => {
    
    const response = await axios.get(`https://backecommercehenry-production.up.railway.app/guitarras/${id}`)

    return response.data.guitarra
}

export default getProductById