const jwt = require("jsonwebtoken");

const checkAuthenctication = (req, res, next) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(" ")[1];
    console.log("Received token:", token); // Add this line to check if token is being received

    if (token) {
      try {
        var decoded_user_info = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded_user_info;
        console.log("Decoded user info:", decoded_user_info); // Add this line to check if token is being decoded correctly
        return next();
      } catch (err) {
        console.error("Error verifying token:", err); // Add this line to log any errors
      }
    }
  }

  res.status(401).send({ msg: "unauthenticated" });
};

module.exports = {
  checkAuthenctication,
};


  // const isTeacher = (req,res,next) => {
  //   if(req.user.role === TEACHER){
  //       next()
  //   }else{
  //       return res.status(403).send({msg:"access denied -only for Teacher"})
  //   }
  // }
  // const isLearner = (req,res,next) => {
  //   if(req.user.role === LEARNER){
  //       next()
  //   }else{
  //       return res.status(403).send({msg:"access denied -only for Learner"})
  //   }
  // }
  

  // module.exports = {
  //   checkAuthenctication,
   
  // }
  
  