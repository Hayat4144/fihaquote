const mongoose = require('mongoose');

const LikeSchema = mongoose.Schema({
    Post_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    Liker_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
   
})

const LikeModel = mongoose.model('Like',LikeSchema);

module.exports = LikeModel ;
