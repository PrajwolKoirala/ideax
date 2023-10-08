// routes/messagingGroup.js

const express = require("express");
const { checkAuthenctication } = require("../middlewares/checkauthentication");
const { sendMessage } = require("../controller/MessagingGroupController");
const router = express.Router();

router.post("/:messagingGroupId/sendMessage", checkAuthenctication, sendMessage);

module.exports = router;
