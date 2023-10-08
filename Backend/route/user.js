const Joi = require('joi');
const express = require("express");
const { signupSchool, signupLearner, signupTeacher, login, getuser } = require("../controller/user.js");
const validateSchema  = require("../middlewares/validateSchema.js");
// const authMiddleware = require('../middleware/authMiddleware.js');
const { checkAuthenctication } = require('../middlewares/checkauthentication.js');
const router = express.Router();

const SignupSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .max(255)
        .required(),
    email:Joi.string()
        . email()
        .required(),
    password:Joi.string()
        .required(),
    role: Joi.string()
        .required()
    

});

const loginSchema = Joi.object({
   
    email:Joi.string()
        . email()
        .required(),
   password: Joi.string()
    .required(),

});

router.post("/signupschool",validateSchema(SignupSchema),signupSchool);
router.post("/signuplearner",validateSchema(SignupSchema),signupLearner);
router.post("/signupTeacher",validateSchema(SignupSchema),signupTeacher);

router.post("/login",validateSchema(loginSchema),login);
// router.get("/getuser",getuser);

module.exports = router;