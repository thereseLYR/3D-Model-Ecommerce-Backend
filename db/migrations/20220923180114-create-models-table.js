module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model_name: {
        type: Sequelize.STRING,
      },
      model_description: {
        type: Sequelize.STRING,
      },
      model_group: {
        type: Sequelize.TEXT,
      },
      price_per_unit: {
        type: Sequelize.FLOAT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Drop category_items first because it references items and categories.
    await queryInterface.dropTable('models');
  },
};
