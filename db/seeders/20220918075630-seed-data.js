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
        password: 'ec5fdc07d43151d336f4f7ef520d1f3f590896be38d2833b9546a4af9b9110681f0267b2e2f3b7dd5fe1bd46514f874fbb6059c3386832ac26e3d99dfc6b0dcf',
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
        password: 'ec5fdc07d43151d336f4f7ef520d1f3f590896be38d2833b9546a4af9b9110681f0267b2e2f3b7dd5fe1bd46514f874fbb6059c3386832ac26e3d99dfc6b0dcf',
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
        password: 'ec5fdc07d43151d336f4f7ef520d1f3f590896be38d2833b9546a4af9b9110681f0267b2e2f3b7dd5fe1bd46514f874fbb6059c3386832ac26e3d99dfc6b0dcf',
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
        password: 'ec5fdc07d43151d336f4f7ef520d1f3f590896be38d2833b9546a4af9b9110681f0267b2e2f3b7dd5fe1bd46514f874fbb6059c3386832ac26e3d99dfc6b0dcf',
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
        password: 'ec5fdc07d43151d336f4f7ef520d1f3f590896be38d2833b9546a4af9b9110681f0267b2e2f3b7dd5fe1bd46514f874fbb6059c3386832ac26e3d99dfc6b0dcf',
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
