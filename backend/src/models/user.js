'use strict';
const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            username: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            hooks: {
                beforeBulkCreate: async (user, options) => {
                    const salt = await bcrypt.genSalt(10); // Hash password with some salt ==> same password but different hash
                    const hashedPassword = await bcrypt.hash(user.password, salt);
                    user.password = hashedPassword;
                },
                beforeCreate: async (user, options) => {
                    const salt = await bcrypt.genSalt(10); // Hash password with some salt ==> same password but different hash
                    const hashedPassword = await bcrypt.hash(user.password, salt);
                    user.password = hashedPassword;
                },
            },
            sequelize,
            modelName: 'User',
        },
    );

    return User;
};
