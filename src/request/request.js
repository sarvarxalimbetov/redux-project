import axios from "axios";

export const request = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
})
