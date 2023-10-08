const express = require("express");
const { checkAuthenctication } = require("../middlewares/checkauthentication");
const { postClass, fetchClasses } = require("../controller/onlineClassGroup");

const router = express.Router();

router.post("/postclass", checkAuthenctication, postClass);

router.get("/fetchclasses", checkAuthenctication, fetchClasses);

module.exports = router;
