"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const modelData = [
      {
        model_name: "Clicky",
        model_description:
          "A fidget gadget for when your fingers are itching to make something move.",
        model_group: "toys",
        price_per_unit: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        model_name: "Spiral Planter Pot",
        model_description: "A simple pot for cacti and other houseplants",
        model_group: "home",
        price_per_unit: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const [clickyModel] = await queryInterface.bulkInsert("models", modelData, {
      returning: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("models", null, {});
  },
};
