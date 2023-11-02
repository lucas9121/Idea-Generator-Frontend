import axios from 'axios'

export default async function createIdeaRequest(data) {
    try {
        const res = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_SERVER_URL}/api/v1/createIdeaGeneration`,
            data,
        })
        
        if(res && res.data && res.data.data){
            return res.data.data
        }

    } catch (error) {
        console.log(error)
    }
}