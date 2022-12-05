'use strict';

const bcrypt = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'users',
            [
                {
                    username: 'sonnguyenhong',
                    password: bcrypt.hashSync('123123', bcrypt.genSaltSync(10)),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    username: 'tuannguyenquoc',
                    password: bcrypt.hashSync('123123', bcrypt.genSaltSync(10)),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('User', null, {});
    },
};
