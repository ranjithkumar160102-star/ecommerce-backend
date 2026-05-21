const express = require("express");

const router = express.Router();

const {
  getRecommendations
} = require("../controllers/analyticsController");



// Recommendation Route

router.get(
  "/recommendations",
  getRecommendations
);



module.exports = router;