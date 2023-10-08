const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const appliedJobSchema = new Schema({
  school_name: {
    type: String,
    required: true,
  },
  application_date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "rejected", "hired"],
    default: "pending",
  },
  job_id: {
    type: ObjectId,
    ref: "Jobs",
  },
  applied_by: {
    type: ObjectId,
    ref: "Teacher",
    required: true,
  },
});

module.exports = mongoose.model("AppliedJob", appliedJobSchema);
