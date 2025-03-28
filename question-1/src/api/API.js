import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchUSers = async() => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const fetchPosts = async() => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};