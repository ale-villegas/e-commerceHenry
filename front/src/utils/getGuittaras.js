import axios from "axios"

const getGuitarras = async () => {
    const {data} =  await axios.get(`http://localhost:3001/guitarras`)
    return data.guitarras
} 


export default getGuitarras