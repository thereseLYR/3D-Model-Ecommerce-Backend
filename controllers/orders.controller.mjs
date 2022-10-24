class OrdersContoller {
  constructor(db, userController) {
    this.db = db;
    this.userController = userController;
  }

  postNewOrder = async (request, response) => {
    // Verify if user is logged in before postNewOrder
    const loggedIn = this.userController.verify(request, response);
    if (!loggedIn) {
      response.status(403).json({
        result: false,
        message: "user is not logged in unable to perform postNewOrder",
      });
      return;
    }

    const body = request.body;
    const cookies = request.cookies;
    const userCookies = JSON.parse(cookies.user);
    const cartOrder = request.body.order;

    // Extract first cart order from cartOrder Array, can only accept array of 1 item for now
    const orderDetails = {
      fullname: body.fullname,
      address: body.address,
      email: body.email,
      phone: body.phone,
      ...cartOrder[0],
    };

    // reducer can take an array of CartOrder
    const amount = cartOrder.reduce((accumulator, order) => {
      return accumulator + order.ppu * order.quantity;
    }, 0);

    const order = await this.db.Order.create({
      order_details: JSON.stringify([orderDetails]),
      customer_id: userCookies.id,
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
