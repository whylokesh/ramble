'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('982qweasdzxc@#', 10);
    await queryInterface.bulkInsert('Users', [{
      email: 'rambleshivam@gmail.com',
      password: hashedPassword,
      full_name: 'Shivam Joshi',
      phone_number: '917014554572',
      is_admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { email: 'rambleshivam@gmail.com' }, {});
  }
};
