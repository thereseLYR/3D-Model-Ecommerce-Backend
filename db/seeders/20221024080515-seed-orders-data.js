"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // seed orders are not tied to stripe, for order history demo only
    const ordersToSeed = [
      {
        id: 99,
        order_details: JSON.stringify([
          {
            id: 1,
            component_breakdown: {
              Case_A_v3: "#4a4a4a",
              Spring_Normal: "darkmagenta",
              Wheel_40T: "lightblue",
              Case_B_v4: "indianred",
            },
            quantity: "2",
            material: "PLA",
            model_name: "Clicky",
            model_description:
              "A fidget gadget for when your fingers are itching to make something move",
            ppu: 15,
            fullname: "John Doe",
            address: "50 Craig Road, #01-01, Singapore 089680",
            email: "john@gmail.com",
            phone: "93377829",
          },
        ]),
        customer_id: 1,
        amount: 30,
        status: "submitted",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 98,
        order_details: JSON.stringify([
          {
            id: 1,
            component_breakdown: {
              Case_A_v3: "lightblue",
              Spring_Normal: "red",
              Wheel_40T: "white",
              Case_B_v4: "lightblue",
            },
            quantity: "1",
            material: "PLA",
            model_name: "Clicky",
            model_description:
              "A fidget gadget for when your fingers are itching to make something move",
            ppu: 15,
            fullname: "Mary Jane",
            address: "501 Orchard Rd #02-14 Wheelock Place Singapore 238880",
            email: "mary@gmail.com",
            phone: "87333486",
          },
        ]),
        customer_id: 2,
        amount: 15,
        status: "submitted",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 97,
        order_details: JSON.stringify([
          {
            id: 1,
            component_breakdown: {
              Case_A_v3: "#5a5a5a",
              Spring_Normal: "lightmagenta",
              Wheel_40T: "darkblue",
              Case_B_v4: "indianred",
            },
            quantity: "2",
            material: "PLA",
            model_name: "Clicky",
            model_description:
              "A fidget gadget for when your fingers are itching to make something move",
            ppu: 15,
            fullname: "John Doe",
            address: "50 Craig Road, #01-01, Singapore 089680",
            email: "john@gmail.com",
            phone: "93377829",
          },
        ]),
        customer_id: 1,
        amount: 30,
        status: "progress",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 96,
        order_details: JSON.stringify([
          {
            id: 1,
            component_breakdown: {
              Case_A_v3: "#5a5a5a",
              Spring_Normal: "lightmagenta",
              Wheel_40T: "darkblue",
              Case_B_v4: "indianred",
            },
            quantity: "2",
            material: "PLA",
            model_name: "Clicky",
            model_description:
              "A fidget gadget for when your fingers are itching to make something move",
            ppu: 15,
            fullname: "John Doe",
            address: "50 Craig Road, #01-01, Singapore 089680",
            email: "john@gmail.com",
            phone: "93377829",
          },
        ]),
        customer_id: 1,
        amount: 30,
        status: "completed",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 95,
        order_details: JSON.stringify([
          {
            id: 1,
            component_breakdown: {
              Case_A_v3: "#5a5a5a",
              Spring_Normal: "lightmagenta",
              Wheel_40T: "darkblue",
              Case_B_v4: "indianred",
            },
            quantity: "2",
            material: "PLA",
            model_name: "Clicky",
            model_description:
              "A fidget gadget for when your fingers are itching to make something move",
            ppu: 15,
            fullname: "John Doe",
            address: "50 Craig Road, #01-01, Singapore 089680",
            email: "john@gmail.com",
            phone: "93377829",
          },
        ]),
        customer_id: 1,
        amount: 30,
        status: "submitted",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert("orders", ordersToSeed, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
