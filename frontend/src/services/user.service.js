import axios from '../configs/axios.config';

const userService = {
    register: async ({ username, password, confirmPassword }) => {
        const response = await axios.post('/auth/register', { username, password, confirmPassword });
        return response.data;
    },
};

export default userService;
