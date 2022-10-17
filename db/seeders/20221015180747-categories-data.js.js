module.exports = {
  up: async (queryInterface) => {
    // Define user data
    const categoriesData = [
      {
        category_name: "Toys",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Household",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Fashion",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert users, returning=true,
    // and destructure the returned results array, for use in other tables
    await queryInterface.bulkInsert("categories", categoriesData, {
      returning: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
