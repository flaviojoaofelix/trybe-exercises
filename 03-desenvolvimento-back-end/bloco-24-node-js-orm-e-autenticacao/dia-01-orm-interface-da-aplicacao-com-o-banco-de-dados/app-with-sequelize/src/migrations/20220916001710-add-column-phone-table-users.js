'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'phoneNum', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('Users', 'phoneNum');
    }
  }
};
