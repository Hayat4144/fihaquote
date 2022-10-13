const User_Info_Modal = require("../DB/QuotesModel/User_Info");
const{ ErrorHandling} = require('../../Controller/ErrorHandling') ;
const {SuccessHandling} = require('../../Controller/SuccesHandling') ;

exports.UsernameChangeBackend = async(req,res)=>{
    try{
        const {username} = req.body ; // username from the body ;
        const UserId = req.user.id ; 
        const IsUserExist = await User_Info_Modal.findById(UserId) ;
        const Succesfunc = async()=>{
            await User_Info_Modal.findByIdAndUpdate(UserId,{username},(err,docs)=>{
		    !err? res.status(200).send({data:'Your username has been updated successfull.'}) : res.status(400).send({error:err});
            })
        }
        !IsUserExist ? ErrorHandling(401,'You are unauthorized.') : Succesfunc() ;
    }catch(err){
        console.log(err)
    }
}
