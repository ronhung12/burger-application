import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-be7f5.firebaseio.com/'
});

export default instance;
