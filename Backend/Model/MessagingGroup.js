// models/MessagingGroup.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MessagingGroupSchema = new Schema({
  participants: [{ type: ObjectId, ref: "User" }], // Including teachers and learners
  onlineClassGroup: { type: ObjectId, ref: "OnlineClassGroup" },
  messages: [
    {
      sender: { type: ObjectId, ref: "User" },
      text: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("MessagingGroup", MessagingGroupSchema);
