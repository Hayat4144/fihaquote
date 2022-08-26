const mongoose = require('mongoose');

const User_Post_Schema = mongoose.Schema({
    User_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users_Info',
        required:true
    },
    Created_at:{
        type:Date,
        default:Date.now
    },
    Media:{
        Text_Post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Text_Media'
        },
        Image_Post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Image_Video_Post'
        }
    }
})


const User_Post_Model = mongoose.model('User_Post',User_Post_Schema);
module.exports = User_Post_Model ;