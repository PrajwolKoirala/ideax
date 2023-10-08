const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OnlineClassParticipationSchema = new Schema({
  learner: {
    type: ObjectId,
    ref: "Learner",
    required: true,
  },
  onlineClassGroup: {
    type: ObjectId,
    ref: "OnlineClassGroup",
    required: true,
  },
  paymentInfo: {
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "other"], // Add other payment methods if needed
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("OnlineClassParticipation", OnlineClassParticipationSchema);
