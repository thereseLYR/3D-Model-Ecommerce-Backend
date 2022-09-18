class TestController {
  test = async (request, response) => {
    response.json({
      result: "test",
      message: "successfully get test endpoint",
    });
  };
}

export default TestController;
