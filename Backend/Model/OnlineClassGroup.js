const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OnlineClassGroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: ObjectId,
    ref: "Teacher",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  maxParticipants: {
    type: Number,
    required: true,
  },
  participants: [{
    type: ObjectId,
    ref: "Learner",
  }],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("OnlineClassGroup", OnlineClassGroupSchema);
