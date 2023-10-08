
const express = require("express");
const{checkAuthenctication,} = require("../middlewares/checkauthentication")
const{applyForJob} = require("../controller/applied_job");
const router = express.Router();



router.post("/apply/:id", checkAuthenctication, applyForJob);

module.exports = router;