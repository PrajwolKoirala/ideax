// controllers/MessagingGroupController.js

const MessagingGroup = require("../Model/MessagingGroup");

const sendMessage = async (req, res, next) => {
  try {
    const { messagingGroupId } = req.params;
    const { text } = req.body;
    const sender = req.user.id; // Assuming you're using authentication

    // Find the messaging group
    const messagingGroup = await MessagingGroup.findById(messagingGroupId);

    if (!messagingGroup) {
      return res.status(404).json({ msg: "Messaging group not found" });
    }

    // Add message to the group
    messagingGroup.messages.push({ sender, text });
    await messagingGroup.save();

    return res.status(201).json({ msg: "Message sent successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendMessage,
};
