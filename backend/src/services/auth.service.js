const User = require('../models').User;

const registerUser = async (params) => {
    const username = params.username;
    const password = params.password;
    const confirmPassword = params.confirmPassword;

    if (password !== confirmPassword) {
        throw new Error('Password and confirm password must be the same!');
    }

    const registedUSer = await User.create({
        username: username,
        password: password,
    });

    if (!registedUSer) {
        throw new Error('Fail to register new user');
    }

    return {
        ...registedUSer.dataValues,
        password: null,
    };
};

const loginUser = async (params) => {};

module.exports = {
    registerUser,
    loginUser,
};
