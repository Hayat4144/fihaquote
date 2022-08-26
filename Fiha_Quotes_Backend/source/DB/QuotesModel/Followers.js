
const mongoose = require('mongoose')

const FollowersSchema = mongoose.Schema({
    Follower_id:{
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

const FollowerModel = mongoose.model('Follower',FollowersSchema) ;

module.exports = FollowerModel ;