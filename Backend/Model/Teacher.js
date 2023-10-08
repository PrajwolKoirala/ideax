const mongoose = require("mongoose")
const{TEACHER,LEARNER, SCHOOL} = require("../constants/role");
// const { exists } = require("../BASICS/modal/todo");
// const { string } = require("joi");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TeacherSchema = new Schema({


    name: {
        type: String,
        maxlength: 255,
        required : true
    },


    email: {
        type:String,
        required : true,
        validate: {
            validator : async function(value) {
                console.log({value});
               let exists = await mongoose.models.Teacher.findOne({email:value})
                if (exists){

                    return false;
                }
                return true;
            },
            msg:"email already exsists"
        }
    },

    password:{
        type:String,
        required:true,
    },
  
    contact:{
        type:Number,
    },
    experience: {
        type: Number,
    },
    language: {
        type: String,
    } 



});


module.exports = mongoose.model("Teacher",TeacherSchema)
