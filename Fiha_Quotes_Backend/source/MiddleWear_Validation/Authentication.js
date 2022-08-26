const { check, validationResult } = require("express-validator");

exports.IsValid = [
  check("username")
    .toLowerCase()
    .notEmpty()
    .isLength({ min: 3, max: 10 })
    .withMessage(
      "username must be 4 characters long  and less than 10 character."
    ),
    check('email').isEmail().withMessage("Invalid Email id"),
    check('password').isStrongPassword({
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        }).withMessage('Enter a Strong password')

]

exports.IsvalidationTrue = (req,res,next)=>{
  const errors = validationResult(req) ;
  try{
    if (errors.array().length > 0){
          return res.status(400).send({error:errors.array()[0].msg})
    }
    else{
      next()
    }
  }catch(err){
    console.log(err)
  }
}