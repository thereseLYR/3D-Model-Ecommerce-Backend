class OrdersContoller {
  constructor(db, userController) {
    this.db = db;
    this.userController = userController;
  }
  postNewOrder = async (request, response) => {
    // TODO: on add to cart, update local storage cookies of full_order

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

    const fullOrder = JSON.parse(cookies["temp_cart"]);

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
      return accumulator + order.ppu * order.quantity;
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
