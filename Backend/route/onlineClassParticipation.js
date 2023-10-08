// routes/onlineClassParticipation.js

const express = require("express");
const { checkAuthenctication } = require("../middlewares/checkauthentication");
const { applyForOnlineClassGroup } = require("../controller/OnlineClassParticipationController");
const { sendMessage } = require("../controller/MessagingGroupController"); 
const router = express.Router();

router.post("/applyclass/:id", checkAuthenctication, applyForOnlineClassGroup);
router.post("/:id/sendMessage", checkAuthenctication, sendMessage); 

module.exports = router;
