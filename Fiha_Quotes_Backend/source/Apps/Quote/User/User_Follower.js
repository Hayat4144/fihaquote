
const FollowerModel = require('../../../DB/QuotesModel/Followers');
const Users_Info = require('../../../DB/QuotesModel/User_Info')

exports.UserFollower = async(req,res)=>{
    try {
        var IsUser ;
        const UserId = req.user.id ;
        const {followerid}= req.body ;
        const Is_ValidUser_func= async()=>{
            IsUser = await Users_Info.find({_id:UserId}) ;
            if(!IsUser){
               return res.status(403);
            }
        }
        Is_ValidUser_func() ;
       
        setTimeout(async() => {
             console.log(IsUser)
             await FollowerModel.create({
                User_id:UserId,
                Follower_id:followerid
            },(err,data)=>{
                if(!err){
                   return res.status(200).send(data)
                }
                if(err.code==11000){
                   return res.status(400).send({err:'You have already followed.'})
                }
                
            })
        }, 2000);
    } catch (error) {
        console.log(error)
    }
}