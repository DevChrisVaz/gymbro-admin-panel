import axios from "axios";

export default axios.create({
    // baseURL: "https://gymbro-services.onrender.com/api/",
    baseURL: "http://localhost:3001/api/",
    timeout: 5000
});