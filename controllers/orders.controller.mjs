class OrdersContoller {
  constructor(db, userController) {
    this.db = db;
    this.userController = userController;
  }
  postNewOrder = async (request, response) => {
    // TODO: on add to cart, update local storage cookies of full_order
    // full_order = array of object { model_id, model_name, model_params, qty, price_per_unit }
    // retrieve these values to complete order_details
    // order_details = firstname, lastname, address, phone, full_order

    // Verify if user is logged in before postNewOrder
    const loggedIn = this.userController.verify(request, response);
    console.log("is user logged in: ", loggedIn);
    if (!loggedIn) {
      response.status(403).json({
        result: false,
        message: "user is not logged in unable to perform postNewOrder",
      });
      return;
    }

    const body = request.body;
    const cookies = request.cookies;
    console.log("looking for cookie values, please print");
    console.log("temp_cart", cookies["temp_cart"]);
    console.log("saved-models", cookies["saved-models"]);
    console.log("user", cookies["user"]);

    // TODO: remove hardcoded values when we can get them from cookies later
    const fullOrder = [
      {
        modelId: 11,
        modelName: "apple pixelated",
        modelParams: { color: "red", material: "PLA" },
        qty: 1,
        ppu: 15,
      },
      {
        modelId: 12,
        modelName: "boat simple",
        modelParams: { color: "blue", material: "PLA" },
        qty: 1,
        ppu: 30,
      },
    ];

    const orderDetails = {
      firstname: body.firstname,
      lastname: body.lastname,
      address: body.address,
      phone: body.phone,
      ...fullOrder,
    };

    // to grab all the firstname, lastname, address, and phone info from DB
    // user must be logged in for successful POST req

    const amount = fullOrder.reduce((accumulator, order) => {
      return accumulator + order.ppu * order.qty;
    }, 0);

    const order = await this.db.Order.create({
      orderDetails: orderDetails,
      customerId: 1,
      amount: amount,
      status: "submitted",
    });

    // TODO: api call to stripe on click checkout cart

    response.status(201).json({
      result: order.toJSON(),
      message: "successfully created order",
    });
  };
}

export default OrdersContoller;
