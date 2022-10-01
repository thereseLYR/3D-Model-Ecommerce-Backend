module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("models", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      model_description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      model_group: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price_per_unit: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Drop category_items first because it references items and categories.
    await queryInterface.dropTable("models");
  },
};
