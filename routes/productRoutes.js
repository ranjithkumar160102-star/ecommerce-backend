const express = require("express");

const router = express.Router();



const {

  createProduct,

  getProducts,

  updateProduct,

  deleteProduct

} = require("../controllers/productController");



const {

  protect,

  authorizeRoles

} = require("../middleware/authMiddleware");



// Create Product

router.post(

  "/",

  protect,
 
  createProduct

);



// Get Products

router.get(

  "/",

  getProducts

);



// Update Product

router.put(

  "/:id",

  protect,

  updateProduct

);



// Delete Product

router.delete(

  "/:id",

  protect,

  deleteProduct

);



module.exports = router;