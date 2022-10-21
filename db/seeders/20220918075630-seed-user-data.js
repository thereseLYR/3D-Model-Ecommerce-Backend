module.exports = {
  up: async (queryInterface) => {
    // Define user data
    const userData = [
      {
        first_name: "John",
        last_name: "Doe",
        username: "JD",
        address: "50 Craig Road, #01-01, Singapore 089680",
        phone: "93377829",
        email: "john@gmail.com",
        password:
          "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Mary",
        last_name: "Jane",
        username: "MJ",
        address: "501 Orchard Rd #02-14 Wheelock Place Singapore 238880",
        phone: "87333486",
        email: "mary@gmail.com",
        password:
          "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Peter",
        last_name: "Griffin",
        username: "PeterG",
        address: "138 Cecil St, #01-01, Singapore 069538",
        phone: "82454641",
        email: "peter@gmail.com",
        password:
          "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Ruth",
        last_name: "Boaz",
        username: "RuthBoaz",
        address: "29, Mayo Street #01-02, Singapore 208315",
        phone: "92963230",
        email: "ruth@gmail.com",
        password:
          "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Simon",
        last_name: "Says",
        username: "SS",
        address: "#40-123 Enterprise HUB, 48 Toh Guan Rd E, Singapore 608586",
        phone: "97952177",
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
