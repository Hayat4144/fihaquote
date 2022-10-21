const mongoose = require('mongoose') ;

const Comment_Schema = mongoose.Schema({
    Post_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        
    },
    Commenter_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    Comment_text:{
        type:String,
        required:true,
        
    },
    comment_on_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

const Comment_Model= mongoose.model('Comments',Comment_Schema) ;

module.exports = Comment_Model ;
