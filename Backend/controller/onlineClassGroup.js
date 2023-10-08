const OnlineClassGroup = require("../Model/OnlineClassGroup");

// const postClass = async (req, res, next) => {
//   try {
//     const {
//       name,
//       description,
//       maxParticipants,
//       startDate,
//       endDate
//     } = req.body;

//     const teacher = req.user.id; 

//     const onlineClassGroup = await OnlineClassGroup.create({
//       name,
//       teacher,
//       description,
//       maxParticipants,
//       startDate,
//       endDate
//     });

//     res.status(201).json(onlineClassGroup);
//   } catch (err) {
//     next(err);
//   }
// };
const postClass = async (req, res, next) => {
    try {
      const { name, description, maxParticipants, participants, startDate, endDate } = req.body;
  
      const newClass = new OnlineClassGroup({
        name,
        teacher: req.user.id, 
        description,
        maxParticipants,
        participants,
        startDate,
        endDate,
      });
  
      const savedClass = await newClass.save();
  
      res.status(201).json(savedClass);
    } catch (error) {
      next(error);
    }
  };
const fetchClasses = async (req, res, next) => {
    try {
      const onlineClassGroups = await OnlineClassGroup.find().populate('teacher');
  
      res.status(200).json(onlineClassGroups);
    } catch (err) {
      next(err);
    }
  };
  
module.exports = {
  postClass,
  fetchClasses
};
