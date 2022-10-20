export default function initCategoriesController(db) {
  const getAllCategories = async (req, res) => {
    try {
      const categories = await db.Category.findAll();
      res.json({ results: categories });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllCategories,
  };
}
