import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID f612e37f18b8d6b7788a22c6e0b71c5036e726c0ba29cae8bd0a8571f83d60a3'
    }
});