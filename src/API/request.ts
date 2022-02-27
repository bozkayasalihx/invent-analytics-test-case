import axios from "axios";

export const request = axios.create({
    baseURL: "http://www.omdbapi.com?apikey=3711865c",
    timeout: 5000,
});
