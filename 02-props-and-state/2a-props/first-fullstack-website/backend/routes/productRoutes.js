// importing router
const router = require("express").Router();
// importing the product controller
const {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

// defining the routes
router.get("/", getAllProducts);
router.get("/:id", getProductsById);
router.post("/create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;