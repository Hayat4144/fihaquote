const mongoose = require('mongoose') ;

// Defing Users_info schema 
const User_Info_Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
       
    },
    password:{
        type:String,
        required:true
    },
    verified: {
        type: Boolean,
        default: false,
      },
    IsApplicationUser:{
        type:String,
        default:"user"
    },
    JoiningDate:{
        type:Date,
        default:Date.now
    }
}) ;


const User_Info_Modal = new mongoose.model('Users_Info', User_Info_Schema )

module.exports = User_Info_Modal ;
