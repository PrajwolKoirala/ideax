const mongoose = require("mongoose")
const{TEACHER,LEARNER, SCHOOL} = require("../constants/role");
// const { exists } = require("../BASICS/modal/todo");
// const { string } = require("joi");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const learnerSchema = new Schema({


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
               let exists = await mongoose.models.Learner.findOne({email:value})
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
    language: {
        type: String,
    } 



});



module.exports = mongoose.model("Learner",learnerSchema)
