import axios from 'axios';

export const getAllPost = () => {
    axios.get(`http://127.0.0.1:8000/portfolio/posts/`)
}