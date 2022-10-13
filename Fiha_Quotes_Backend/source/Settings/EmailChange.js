const User_info_Model = require('../DB/QuotesModel/User_Info');
const crypto = require('crypto')
const {EmailVerify} = require('./EmailVerify')
const tokenModel = require('../DB/Token');
const { ErrorHandling } = require('../../Controller/ErrorHandling');
const { SuccessHandling } = require('../../Controller/SuccesHandling');

exports.EmailChange =async (req,res)=>{

	try{
		//getting userdata from request 
		const {currentemail,newemail} = req.body;

		// getting userid from the cookie
		const UserId = req.user.id ;

		// check is email exist and valid to that user 
		const IsValidEmail = await User_info_Model.findById(UserId) ;

		// Successfunction 
		const SuccessFunc = async()=>{
			// store the verify token in database for short period of time.
			const Verifytoken = await tokenModel.create({
				userid:IsValidEmail._id ,
				token:crypto.randomBytes(32).toString("hex")
			})

			// verifyemailurl
			const VerifyMessageURL = `${process.env.BASE_URL}/user/verify/change/email/${IsValidEmail._id}/${Verifytoken.token}/${IsValidEmail.email}`;

			// calling emailverify function
			await EmailVerify(IsValidEmail.email,VerifyMessageURL) ;
			SuccessHandling(200,`we will send a verification email to change the email . check your email.`)
			
		}
		!IsValidEmail && IsValidEmail.email != currentemail ? ErrorHandling(400,'Sorry Email does not match.') : SuccessFunc() ;
	}catch(err){
		console.log(err)
	}
}
