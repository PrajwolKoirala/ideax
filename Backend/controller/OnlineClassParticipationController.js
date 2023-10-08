// controllers/OnlineClassParticipationController.js

const OnlineClassParticipation = require("../Model/OnlineClassParticipant");
const MessagingGroup = require("../Model/MessagingGroup");



const applyForOnlineClassGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const learnerId = req.user.id;
    const { paymentInfo } = req.body;

    // Check if the learner is already a participant
    const existingParticipant = await OnlineClassParticipation.findOne({
      learner: learnerId,
      onlineClassGroup: groupId,
    });

    if (existingParticipant) {
      return res.status(400).json({ msg: "Already a participant in this group" });
    }

    // Add the learner to the class group
    const newParticipation = await OnlineClassParticipation.create({
      learner: learnerId,
      onlineClassGroup: groupId,
      paymentInfo: {
        amount: paymentInfo.amount,
        paymentMethod: paymentInfo.paymentMethod,
        cardNumber: paymentInfo.cardNumber,
        expirationDate: paymentInfo.expirationDate,
        cvv: paymentInfo.cvv,
      },
    });

    // Assume payment is successful, you can add payment validation logic here

    // Create a new messaging group for this class
    const newMessagingGroup = await MessagingGroup.create({
      participants: [learnerId],
      onlineClassGroup: groupId,
    });

    return res.status(201).json({ msg: "Applied for class successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  applyForOnlineClassGroup,
};
