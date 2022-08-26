const mongoose = require('mongoose')
const Schema =  mongoose.Schema ;

const User_Profile_Schema = new mongoose.Schema({
    userid:{
        type:Schema.Types.ObjectId,
        required:true,
        unique:true

    },
    Name:{
        type:String,
        required:true,
    },
  
    address:{
        "city":{
            type:String,
        },
        "State":{
            type:String,
        },
        "Country":{
            type:String,
        }
    },
    Date_of_Birth:{
        type:Date,
    },
    Description:{
        type:String,
    },
    Gender:{
        type:String,
        require:true,
    },
    ProfilePic:{
        type: String,
    }

    
})

const User_Profile_Model = new mongoose.model('User_Profile',User_Profile_Schema) 

module.exports = User_Profile_Model