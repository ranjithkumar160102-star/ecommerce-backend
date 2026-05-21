const Product = require("../models/product");



const getRecommendations = async (req, res) => {

  try {

    const products = await Product.find().limit(3);



    res.status(200).json({

      message: "Recommended Products",

      recommendations: products

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};



module.exports = {

  getRecommendations

};