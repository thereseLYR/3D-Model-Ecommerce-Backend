module.exports = {
  up: async (queryInterface) => {
    // Define user data
    const userData = [
      {
        first_name: 'John',
        last_name: 'Doe',
        username: 'some username',
        address: 'some address',
        phone: 'some phone number',
        email: 'john@gmail.com',
        password: 'cec96aa1b911244e1657b54aadb408d60dcc742b7b3eede48e2fd7708589b048c6f7ac3fa6667e002f9ec80ec4d8d43fe24982a87ffe7f9f72be33fae6e3590c',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Mary',
        last_name: 'Jane',
        username: 'some username',
        address: 'some address',
        phone: 'some phone number',
        email: 'mary@gmail.com',
        password: 'cec96aa1b911244e1657b54aadb408d60dcc742b7b3eede48e2fd7708589b048c6f7ac3fa6667e002f9ec80ec4d8d43fe24982a87ffe7f9f72be33fae6e3590c',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Peter',
        last_name: 'Griffin',
        username: 'some username',
        address: 'some address',
        phone: 'some phone number',
        email: 'peter@gmail.com',
        password: 'cec96aa1b911244e1657b54aadb408d60dcc742b7b3eede48e2fd7708589b048c6f7ac3fa6667e002f9ec80ec4d8d43fe24982a87ffe7f9f72be33fae6e3590c',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Ruth',
        last_name: 'Boaz',
        username: 'some username',
        address: 'some address',
        phone: 'some phone number',
        email: 'ruth@gmail.com',
        password: 'cec96aa1b911244e1657b54aadb408d60dcc742b7b3eede48e2fd7708589b048c6f7ac3fa6667e002f9ec80ec4d8d43fe24982a87ffe7f9f72be33fae6e3590c',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Simon',
        last_name: 'Says',
        username: 'some username',
        address: 'some address',
        phone: 'some phone number',
        email: 'simon@gmail.com',
        password: 'cec96aa1b911244e1657b54aadb408d60dcc742b7b3eede48e2fd7708589b048c6f7ac3fa6667e002f9ec80ec4d8d43fe24982a87ffe7f9f72be33fae6e3590c',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert users, returning=true,
    // and destructure the returned results array, for use in other tables
    const [johnUser, maryUser, peterUser, ruthUser, simonUser] = await queryInterface.bulkInsert('users', userData, {
      returning: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
