const apiStatus = require('../constants/apiStatus.constant');
const httpStatus = require('../constants/httpStatus.constant');
const authService = require('../services/auth.service');

const registerUser = async (req, res) => {
    try {
        const params = {
            ...req.body,
        };
        const response = await authService.registerUser(params);
        return res.status(httpStatus.OK).json({
            status: apiStatus.SUCCESS,
            message: 'Create new user successfully!',
            data: response,
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: apiStatus.OTHER_ERROR,
            message: err.message,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const params = {
            ...req.body,
        };
        const response = await authService.loginUser(params);
        return res.status(httpStatus.OK).json({
            status: apiStatus.SUCCESS,
            message: 'Login successfully!',
            data: response,
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: apiStatus.OTHER_ERROR,
            message: err.message,
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
