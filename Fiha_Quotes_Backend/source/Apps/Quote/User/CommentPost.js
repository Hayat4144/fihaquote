const Comment_Model = require("../../../DB/QuotesModel/CommentsModel");
const User_Post_Model = require("../../../DB/QuotesModel/User_Post");

exports.CommentPost =async (req,res)=>{
    try{
        const{Comment_text,Post_id,} = req.body ;
        const UserId = req.user.id ;
        // console.log(UserId) ;

        const Commenter_id = await User_Post_Model.find({_id:Post_id}) ;
        console.log(Commenter_id[0].User_id) ;
        const result = await Comment_Model.create({
            comment_on_id:Commenter_id[0].User_id,
            Comment_text,
            Post_id,
            Commenter_id:UserId,
        },(err,data)=>{
            ! err? res.status(200).send({data}) : res.status(400).send({err})
        })
        
    }catch(error){
        console.log(error)
    }
}
