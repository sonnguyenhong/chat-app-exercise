const User = require('../models').User;
const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const loginUser = async (params) => {
    const username = params.username;
    const password = params.password;

    const user = await User.findOne({
        where: {
            username: username,
        },
    });

    if (!user) {
        throw new Error('User does not exist');
    }

    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) {
        throw new Error('Password is incorrect');
    }

    const userInfo = {
        id: user.id,
        username: user.username,
    };

    const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
    });

    return {
        ...user.dataValues,
        password: null,
        token,
    };
};

module.exports = {
    registerUser,
    loginUser,
};
