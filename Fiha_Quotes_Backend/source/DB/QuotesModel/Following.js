
const mongoose = require('mongoose')

const FollowingSchema = mongoose.Schema({
    Following_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true,
        ref:'Users_Info'
    },
    Created_at:{
        type:Date,
        default:Date.now
    },
    User_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Users_Info'
    }

})

const FollowingModel = mongoose.model('Followeing',FollowingSchema) ;

module.exports = FollowingModel ;