import axios from "axios";

const sessionApi = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true
});

export async function startSession(signal) {
    try {
        console.log("starting session...");
        const response = await sessionApi.post("/session/start", {}, { signal });
        console.log("start response: ", response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function continueSession(signal) {
    try {
        console.log("continuing session...");
        const response = await sessionApi.get("/session", {}, { signal });
        console.log("continue response: ", response);
        return response;
    } catch (error) {     
        console.error(error);
    }
}