const { check, validationResult } = require("express-validator");
exports.ProfileValidationCheck = [
  check("FirstName")
    .escape()
    .trim()
    .isLength({ max: 10 })
    .withMessage("First name has been 8 Characters long."),
  check("Surname")
    .escape()
    .trim()
    .isLength({ max: 10 })
    .withMessage("Surname has been 8 characters long."),
  check("Description")
    .escape()
    .trim()
    .isLength({ min: 30, max: 150 })
    .withMessage(
      "Description about yourself is min 30 characters and max 150 character long."
    ),
  check("Gender")
    .trim()
    .escape()
    .isLength({ min: 4, max: 7 })
    .withMessage("Invalid input"),
  check("DOB")
    .escape()
    .isDate()
    .withMessage("Date of birth should be yy-mm-dd format."),
  check("city")
    .trim()
    .escape()
    .isLength({ min: 2, max: 10 })
    .withMessage("Enter valid input"),
  check("State")
    .trim()
    .escape()
    .isLength({ min: 2, max: 15 })
    .withMessage("Enter valid input"),
  check("Country")
    .trim()
    .escape()
    .isLength({ min: 2, max: 13 })
    .withMessage("Enter valid input"),
];
exports.ProfilevalidationError = (req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(400).send({error:error.array()[0].msg})
    }
    else{
        next()
    }

}