const {check,validationResult} = require('express-validator') ;

exports.Follower_validation= [
    check('followerid')
    .isMongoId()
    .trim()
    .escape()
    .withMessage('Invalid id,Please check your id and try again')
]




exports.Follower_error = (req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(400).send({error:error.array()[0].msg})
    }
    else{
        next()
    }
}
