
var jwt = require('jsonwebtoken');
const Teacher = require ("../Model/Teacher");
const Learner = require ("../Model/Learner");
const School = require ("../Model/School");

const bcrypt = require("bcrypt");




    const signupTeacher = async (req, res, next) => {
        try {
            const hash_pw = await bcrypt.hash(req.body.password, 10);
            const teacher = await Teacher.create({ 
                ...req.body,
                password: hash_pw
            });
            res.send(teacher);
        } catch (err) {
            next(err);
        }
    };
    const signupLearner = async (req, res, next) => {
        try {
            const hash_pw = await bcrypt.hash(req.body.password, 10);
            const learner = await Learner.create({ 
                ...req.body,
                password: hash_pw
            });
            res.send(learner);
        } catch (err) {
            next(err);
        }
    };
    const signupSchool = async (req, res, next) => {
        try {
            const hash_pw = await bcrypt.hash(req.body.password, 10);
            const school = await School.create({ 
                ...req.body,
                password: hash_pw
            });
            res.send(school);
        } catch (err) {
            next(err);
        }
    };
 



    const login = async (req, res) => {
        const { email, password } = req.body;
        let userType;
    
        try {
            let user = await Teacher.findOne({ email });
    
            if (user) {
                userType = 'Teacher';
            } else {
                user = await Learner.findOne({ email });
    
                if (user) {
                    userType = 'Learner';
                } else {
                    user = await School.findOne({ email });
    
                    if (user) {
                        userType = 'School';
                    }
                }
            }
    
            if (!user) {
                return res.status(401).json({ msg: 'Invalid credentials' });
            }
    
            const isMatch = await bcrypt.compare(password, user.password);
    
            if (!isMatch) {
                return res.status(401).json({ msg: 'Invalid credentials' });
            }
    
            const token = jwt.sign(
                { id: user._id, role: userType },
                process.env.JWT_SECRET,
                { expiresIn: '1h' } // Adjust as needed
            );
    
            return res.json({ user, role: userType, token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Internal Server Error' });
        }
    };
    
    


const getuser = async (req, res,next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send({ msg: "Unauthorized: No token provided" });
        }
        console.log("Received token:", token);

        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decodedToken._id);

            if (!user) {
                return res.status(401).send({ msg: "Unauthorized: Invalid token" });
            }

            return res.send({ user });
        } catch(err) {
            console.error(err);
            return res.status(401).send({ msg: "Unauthorized: Invalid token" });
        }
    } catch (err) {
        
        next(err);
    }
};



module.exports = {
    signupTeacher,
    signupLearner,
    signupSchool,
    login,
    getuser
}