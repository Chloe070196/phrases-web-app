const rootUrl = import.meta.env.VITE_API_URL

const request = async (endpoint: string, method: string, data: object): Promise<Response> => {
    const url = rootUrl + endpoint
    const options = {
        method: method, 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }  
    return await fetch(url, options)
}

const post = async (endpoint: string, data: object ): Promise<Response> => {
    const method = "POST"
    return await request(endpoint, method, data)
} 

const registerNewUser = async (data: object): Promise<Response> => {
    const response = await post('/register', data)
    const responseData = await response.json()
    return responseData
}

const logIn = async (data: object): Promise<Response> => {
    const response = await post('/login', data)
    const responseData = await response.json()
    return responseData
}

export { registerNewUser, logIn }