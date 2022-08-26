const mongoose = require('mongoose') ;
require('mongoose-type-url');
const Image_Video_Post_Schema = mongoose.Schema({
    Post_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User_Post'
    },
    image_url:{
        type:mongoose.SchemaTypes.Url,
    }
})

const Image_Video_Post_Model= mongoose.model('Image_Video_Post',Image_Video_Post_Schema) ;

module.exports = Image_Video_Post_Model ;