import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2Y3Nzc4ZTE2ZmE5ZWM4MDM0YWMwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTA3MTM1OSwiZXhwIjoxNjQxMzMwNTU5fQ.yh0TIB9GuXVnVW60l1h2K1vT5R0ejjyLE8eeQCcBPjk'


export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token : `bearer ${TOKEN}`}
})