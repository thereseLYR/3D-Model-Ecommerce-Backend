export default function initModelsController(db) {
  const getModelsByCategory = async (req, res) => {
    const { categoryId } = req.body

    // category ids will start from 1 onwards, so will set the req categoryId to 0 if user clicks 'all categories'
    if (categoryId === 0) {
      // so this fetches all models
      try {
        const models = await db.Model.findAll()
        res.json({ results: models })
      } catch (error) {
        console.log(error)
      }
    } else {
      // this fetches models based on selected category
      try {
        const models = await db.Model.findAll({
          where: {
            category_id: categoryId
          }
        })
        res.json({ results: models })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return {
    getModelsByCategory
  }
}
