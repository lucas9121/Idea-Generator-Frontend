import axios from 'axios'

export default async function createIdeaRequest(data) {
    await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_SERVER_URL}/api/v1/createIdeaGeneration`,
        data,
    })
}