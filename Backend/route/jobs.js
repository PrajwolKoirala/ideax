
const express = require("express");
const router = express.Router()
const {postJob,fetchJob,update,remove} = require("../controller/jobs");
const{checkAuthenctication} = require("../middlewares/checkauthentication")


router.post("/postjob",checkAuthenctication,postJob);
router.get("/fetchjob",fetchJob);
router.put("/update/:id",update);
router.delete("/delete/:id",remove);


// router.post("/login",login);

module.exports = router;