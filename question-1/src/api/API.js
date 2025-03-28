import axios from "axios";

const API_URL = "http://localhost:3001"; 

export const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/users?_sort=postCount&_order=desc`);
    return response.data;
};

export const fetchPosts = async () => {
    const response = await axios.get(`${API_URL}/posts?_sort=timestamp&_order=desc`);
    return response.data;
};

export const fetchTrendingPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    const posts = response.data;
    const maxComments = Math.max(...posts.map(post => post.commentCount));
    return posts.filter(post => post.commentCount === maxComments);
};