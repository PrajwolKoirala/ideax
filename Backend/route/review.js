const Joi = require('joi');
const express = require("express");
const{checkAuthenctication} = require("../middlewares/checkauthentication")
const { review_product } = require('../controller/review.js');
const router = express.Router();



router.post("/",checkAuthenctication,review_product);

module.exports = router;