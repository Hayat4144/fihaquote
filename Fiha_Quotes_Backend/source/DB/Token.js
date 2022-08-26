const mongoose = require('mongoose')
const Schema = mongoose.Schema ;

const tokenSchema = new mongoose.Schema({
    userid:{
        type:Schema.Types.ObjectId ,
        ref:"Users_Info",
        required:true
    },
    token:{
        type:String,
        required:true
    }
}) ;

const tokenModel= new mongoose.model('token', tokenSchema)

module.exports = tokenModel  ;