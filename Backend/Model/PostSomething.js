const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 40,
        required: true
    },
    description: {
        type: String,
        maxlength: 999,
        required: true
    },
    content: {
        type: String,
        maxlength: 400,
        required: true
    },
    images: {
        type: [String]
    },
    created_by: {
        type: ObjectId
    },
    // created_by: {
    //     type: Schema.Types.ObjectId,
    //     refPath: 'created_by_model', // Reference path based on user role
    //     required: true
    // },
    // created_by_model: {
    //     type: String,
    //     enum: ['Learner', 'Teacher'] // Specify the possible models
    // },
    reviews: [{
        user: String, // Assuming you want to associate reviews with a user
        rating: Number,
        comment: String,
      }]
});

module.exports = mongoose.model('Post', postSchema);

