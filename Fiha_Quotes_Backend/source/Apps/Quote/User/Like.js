const LikeModel = require("../../../DB/QuotesModel/Like_Post");

exports.Like = async(req,res)=>{
    try {
        const {Post_id} = req.body;
        const UserId = req.user.id ;
        console.log(UserId)
        console.log(Post_id)
        const result = await LikeModel.create({
            Post_id,
            Liker_id:UserId
            
        },(err,data)=>{
            !err ? res.status(200).send({data}): res.status(400).send({err})
        })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}