export default function initModelsController(db) {
  const getModelData = async (req, res) => {
    // get model id from query params and spit model data back
    const { modelId } = req.params;

    try {
      const modelData = await db.Model.findByPk(modelId);
      res.status(200).json({ modelData });
    } catch (err) {
      console.log(err);
    }
  };

  const getAllModels = async (req, res) => {
    try {
      const models = await db.Model.findAll();
      res.status(200).json({ results: models });
    } catch (error) {
      console.log(error);
    }
  };

  const getModelsByCategory = async (req, res) => {
    const { categoryId } = req.params;

    // this fetches models based on selected category
    try {
      const models = await db.Model.findAll({
        where: {
          category_id: categoryId,
        },
      });
      res.status(200).json({ results: models });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getModelData,
    getAllModels,
    getModelsByCategory,
  };
}
