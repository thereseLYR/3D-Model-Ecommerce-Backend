class OrdersContoller {
  constructor(db, userController) {
    this.db = db;
    this.userController = userController;
  }
  postNewOrder = async (request, response) => {
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
      fullname: body.fullname,
      address: body.address,
      email: body.email,
      phone: body.phone,
      ...fullOrder,
    };

    const amount = fullOrder.reduce((accumulator, order) => {
      return accumulator + order.ppu * order.quantity;
    }, 0);

    const order = await this.db.Order.create({
      order_details: orderDetails,
      customer_id: 1,
      amount: amount,
      status: "submitted",
    });

    response.status(201).json({
      result: order.toJSON(),
      message: "successfully created order",
    });
  };

  getLatestOrder = async (request, response) => {
    const userId = request.params.user_id;
    let sort = "created_at:desc";

    if (request.query.sort) {
      sort = request.query.sort; // ?sort=created_at:desc
    }

    const sortOrder = sort.split(":");

    try {
      const order = await this.db.Order.findAll({
        where: { customer_id: userId },
        order: [[sortOrder[0], sortOrder[1]]],
      });
      console.log(order);
      response.status(200).json({
        result: order[0].toJSON(),
        message: "successfully created order",
      });
    } catch (error) {
      console.log("[DB_ERROR] unable to get latest order: ", error);
    }
  };
}

export default OrdersContoller;
