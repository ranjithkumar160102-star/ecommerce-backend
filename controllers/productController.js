const Product = require("../models/product");

// Create Product
const createProduct = async (req, res) => {

  try {

    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product Created Successfully",
      product,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Get All Products
const getProducts = async (req, res) => {

  try {

    const search = req.query.search || "";
    const category = req.query.category || "";

    let query = {};

    // Search
    if (search) {

      query.name = {
        $regex: search,
        $options: "i",
      };

    }

    // Filter
    if (category) {

      query.category = category;

    }

    const products = await Product.find(query);

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Get Single Product
const getSingleProduct = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({
        message: "Product Not Found",
      });

    }

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Update Product
const updateProduct = async (req, res) => {

  try {

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Product Updated Successfully",
      updatedProduct,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Delete Product
const deleteProduct = async (req, res) => {

  try {

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};