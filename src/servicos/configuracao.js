import axios from "axios";

export const http = axios.create({
    baseURL: 'https://vuenoteapi.herokuapp.com/',
    timeout: 10000,
});