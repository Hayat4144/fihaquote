// initializing router
const express = require("express");
const router = express.Router();
const {Auth_Signup}  = require('../Authentication/signup');
const { IsValid, IsvalidationTrue,} = require("../MiddleWear_Validation/Authentication");
const { VerifyEmail } = require("../Authentication/VerifyEmail");
const { Sigin } = require("../Authentication/Signin");
const { IsValidToken } = require("../MiddleWear_Validation/CheckToken");
const { ChangePassword } = require("../Authentication/Change-Password");
const { Logout } = require("../Authentication/logout");
const { User_Profile } = require("../Apps/Quote/User/User_Profile");
const {  ProfileValidationCheck,  ProfilevalidationError} = require("../Apps/Quote/settings/User_Profile_validation");
const { User_Avtar } = require("../Apps/Quote/User/User_Avtar");
const uploads = require("../MiddleWear_Validation/multer");
const { User_post_validation, User_post_error } = require("../Apps/Quote/settings/user_post_validation");
const { User_Post } = require("../Apps/Quote/User/Post");
const { UserFollower } = require("../Apps/Quote/User/User_Follower");
const { Follower_validation, Follower_error } = require("../Apps/Quote/settings/follower_validation");
const { UserFollowing } = require("../Apps/Quote/User/User_Following");
const { Following_validation, Following_error } = require("../Apps/Quote/settings/following.Validation");
const {EmailChange} = require('../Settings/EmailChange');
const { UsernameChangeBackend } = require("../Settings/UsernameChangeBackend");
const {CommentPost} = require('../Apps/Quote/User/CommentPost');
const {Like} = require('../Apps/Quote/User/Like');
const lst = (req, res) => {
  return res.status(200).send("how are you.");
};



router.post('/uploads',IsValidToken,uploads,User_Avtar) // completed

router.post("/authentication/signup", Auth_Signup); // completed

router.post("/authentication/signin", Sigin); // completed

router.post('/user/post/comment',IsValidToken,CommentPost)
router.post('/user/post/like',IsValidToken,Like)

router.post("/authentication/user/logout", IsValidToken, Logout); // completed

//router.get("/user/change/email/verifiy/:id/:token/:currentemail/",EmailVerifyConfirm)
router.get("/user/verify/email/:id/:token", VerifyEmail); //completed

router.post("/user/change/password", IsValidToken, ChangePassword); //testing
router.post("/user/change/username", IsValidToken,UsernameChangeBackend)

router.post('/user/post',uploads,User_post_validation,User_post_error,IsValidToken,User_Post)

router.post('/user/followers',Follower_validation,Follower_error,IsValidToken,UserFollower)
router.post('/user/following',Following_validation,Following_error,IsValidToken,UserFollowing)
router.post(
  "/user/setting/profile",
  ProfileValidationCheck,
  ProfilevalidationError,
  IsValidToken,
  User_Profile
);


//emai change route 
router.post('/settings/change/email',IsValidToken,EmailChange) ;


// router.get("/hello", IsValidToken, lst);

module.exports = router;
