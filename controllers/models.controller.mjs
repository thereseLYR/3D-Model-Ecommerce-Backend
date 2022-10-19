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

  return {
    getModelData,
  };
}
