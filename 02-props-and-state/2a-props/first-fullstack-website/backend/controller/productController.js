// importing Product Model
const Product = require("../model/productModel");

// getting all products using get method
async function getAllProducts(req, res) {
  try {
    const products = await Product.find({});
    res.status(200).send({
      message: "Here is the all products:",
      products: products,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
}

// getting product by id using get method
async function getProductsById(req, res) {
  const id = req.params.id;
  try {
    const target = await Product.findById(id);
    res.status(200).send({ message: "successfuly found:", product: target });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
}

// creating product using post method
async function createProduct(req, res) {
  const { Name, Price, Description } = req.body;

  try {
    const newProduct = Product.create({
      Name: Name,
      Price: Price,
      Description: Description,
    });

    (await newProduct).save();

    res.status(201).send({
      message: "The new Product successfuly created!",
      product: newProduct,
    });
  } catch (error) {
    console.log("current error:", error);
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
}

// updating product using put method
async function updateProduct(req, res) {
  const id = req.params.id;
  const { Name, Price, Description } = req.body;
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        Name: Name,
        Price: Price,
        Description: Description,
      },
      { new: true }
    );

    if (!updateProduct) return res.status(404).json("Product not found");

    res
      .status(200)
      .send({ message: "Product successfuly updated", product: updateProduct });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
}

// deleting product using delete method
async function deleteProduct(req, res) {
  const id = req.params.id;
  try {
    const trash = await Product.findByIdAndDelete(id);
    
    if (!trash) return res.status(404).json("Product not found");

    res.status(200).json("Product is deleted");
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
}

// exporting the functions to be used in the routes
module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
