import axios from "axios"

const getGuitarras = async () => {
    const {data} =  await axios.get(`https://backecommercehenry-production.up.railway.app/guitarras`)
    return data.guitarras
} 


export default getGuitarras