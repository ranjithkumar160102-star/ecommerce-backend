const Product = require("../models/product");



// Create Product

const createProduct = async (req, res) => {

  try {

    const product = await Product.create(req.body);

    res.status(201).json(product);

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



    // Search by Name

    if (search) {

      query.name = {

        $regex: search,

        $options: "i"

      };

    }



    // Filter by Category

    if (category) {

      query.category = category;

    }



    const products = await Product.find(query);



    res.status(200).json(products);

  }

  catch (error) {

    res.status(500).json({

      message: error.message

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

    res.json(updatedProduct);

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

    res.json({
      message: "Product Deleted",
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
  updateProduct,
  deleteProduct,
};