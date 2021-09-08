import axios from "axios";

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { data } = error.response;
            if (data) {
                return Promise.reject(new Error(data));
            }
        }
        return Promise.reject(Error);
    }
)

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});

export default axiosInstance;