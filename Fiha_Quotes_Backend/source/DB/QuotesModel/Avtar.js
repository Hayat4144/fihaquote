const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;
require('mongoose-type-url');
const AvtarSchema = mongoose.Schema({
    userid:{
        type:Schema.Types.ObjectId,
        ref:"Users_Info",
        required:true
    },
    profileurl:{
        type:mongoose.SchemaTypes.Url,
        required:true,
        unique:true
    }
})

const AvtarModel = mongoose.model('User_Avtar',AvtarSchema) ;
module.exports = AvtarModel  ;