module.exports = {
  up: async (queryInterface) => {
    // Define user data
    const userData = [
      {
        first_name: "John",
        last_name: "Doe",
        username: "some username",
        address: "some address",
        phone: "some phone number",
        email: "john@gmail.com",
        password:
          "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Mary",
        last_name: "Jane",
        username: "some username",
        address: "some address",
        phone: "some phone number",
        email: "mary@gmail.com",
        password:
          "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Peter",
        last_name: "Griffin",
        username: "some username",
        address: "some address",
        phone: "some phone number",
        email: "peter@gmail.com",
        password:
          "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Ruth",
        last_name: "Boaz",
        username: "some username",
        address: "some address",
        phone: "some phone number",
        email: "ruth@gmail.com",
        password:
          "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Simon",
        last_name: "Says",
        username: "some username",
        address: "some address",
        phone: "some phone number",
        email: "simon@gmail.com",
        password:
          "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert users, returning=true,
    // and destructure the returned results array, for use in other tables
    await queryInterface.bulkInsert("users", userData, {
      returning: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
