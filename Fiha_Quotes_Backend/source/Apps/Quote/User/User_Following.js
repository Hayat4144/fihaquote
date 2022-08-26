const User_Info = require('../../../DB/QuotesModel/User_Info')
const Following_model = require('../../../DB/QuotesModel/Following')

exports.UserFollowing=(req,res)=>{
    try {
        var IsUser ;
        const UserId = req.user.id ;
        const {followingid}= req.body ;
        const Is_ValidUser_func= async()=>{
            IsUser = await User_Info.find({_id:UserId}) ;
            if(!IsUser){
               return res.status(403);
            }
        }
        Is_ValidUser_func() ;
        setTimeout(async() => {
            console.log(IsUser)
            await Following_model.create({
               User_id:IsUser[0]._id,
               Following_id:followingid
           },(err,data)=>{
               if(!err){
                  return res.status(200).send(data)
               }
               if(err.code==11000){
                  return res.status(400).send({err:'You have already following.'})
               }
               
           })
       }, 2000);
    } catch (error) {
        console.log(error)
    }
}