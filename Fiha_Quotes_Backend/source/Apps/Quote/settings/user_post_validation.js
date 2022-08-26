const {check,validationResult} = require('express-validator') ;

exports.User_post_validation= [
    check('quote')
    .isLength({min:8,max:255})
    .trim()
    .escape()
    .withMessage('Your post should be minimum 10 character and maximum 255.')
]




exports.User_post_error = (req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(400).send({error:error.array()[0].msg})
    }
    else{
        next()
    }
}

