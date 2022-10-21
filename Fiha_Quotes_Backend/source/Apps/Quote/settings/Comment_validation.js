const {createHash} = require('crypto');
const {check ,validationResult } = require('express-validator');
exports.comment_validation = [
    check('Post_id')
    .isMongoId()
    .notEmpty()
    .withMessage('Invalid ObjectId'),
    check('Commenter_id')
    .isEmpty()
    .isMongoId()
    .withMessage('Invalid ObjectId'),
    check('comment_on_id')
    .isEmpty()
    .isMongoId()
    .withMessage(' Invalid ObjectId' ),
    check('Comment_text')
    .isEmpty()
    .isLength({max:200,min:5})
    .trim()
    .escape()
    .withMessage('comment is empty.'),
    


]


exports.Comments_validation_errors= (req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).send({error:error.array()[0].msg});
    }
    else{
        next() ;
    }
}
