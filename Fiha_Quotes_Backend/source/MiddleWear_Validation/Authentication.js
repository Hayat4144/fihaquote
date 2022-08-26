const { check, validationResult } = require("express-validator");

exports.IsValid = [
  check("email").isEmail().withMessage("Invalid Email id"), 
  check("username")
    .toLowerCase()
    .notEmpty()
    .isLength({ min: 4, max: 8 })
    .withMessage("username must be 4 characters long "),
  check("password")
    .notEmpty()
    .isLength({ min: 8, max: 20 })
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10,
    })
    .withMessage(
      "Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character."
    ),
    check('confirmpassword').custom((value,{req})=>{
        if(value != req.body.password){
            throw new Error("Your password doesn't mathch. please check your password.");
        }
        else{
          return true ;
        }
    })
  
];

// check for any error
exports.IsvalidationTrue= (req,res,next)=>{
  const error = validationResult(req)
  if(error.array().length> 0){
      try{
        if(error.array()[0].msg == "invalid value"){
          res.status(400).send({error:error.array()[1].msg})
        }
        else{
            res.status(400).send({error:error.array()[0].msg})
        }
        
      }catch(err){
        console.log(err)
      }
    
  }
  else{
    next()
  }
}



