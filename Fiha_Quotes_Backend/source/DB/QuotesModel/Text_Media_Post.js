const mongoose = require('mongoose');

const Text_Media_Schema = mongoose.Schema({
    Post_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User_Post',
    },
    Quote_Text:{
        type:String,
        required:true,
    }
})

const Text_Media_Model = mongoose.model('Text_Media',Text_Media_Schema) ;

module.exports = Text_Media_Model ;