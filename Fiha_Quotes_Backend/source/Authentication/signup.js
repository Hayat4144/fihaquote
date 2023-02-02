const bcrypt = require("bcrypt");
const { Signup_mail } = require("./sigup_mail");
const User_Info_Modal = require("../DB/QuotesModel/User_Info");
const Token = require("../DB/Token");
const crypto = require("crypto");

exports.Auth_Signup = async (req, res) => {
  try {
    const {
      username,
      email,
      password: textpassword,
      confirmpassword,
    } = req.body;
    res.set("Content-Type", "application/json");
    if (textpassword !== confirmpassword) {
      return res
        .status(400)
        .send({
          error: "Password does not match check your password and try again.",
        });
    }
    const IsEmailExist = await User_Info_Modal.findOne({ email: email });

    if (IsEmailExist) {
      return res
        .status(400)
        .send({ data: "Email is already in use choose another ." });
    }

    const saltRound = 10;
    const hashpassword = await bcrypt.hash(textpassword, saltRound);

    const NewUser = await User_Info_Modal.create({
      username,
      password: hashpassword,
      email,
    });

    // const Verifytoken = await Token.create({
    //   userid: NewUser._id,
    //   token: crypto.randomBytes(32).toString("hex"),
    // });
    // const VerifyMessage = `${process.env.BASE_URL}/user/verify/email/${NewUser._id}/${Verifytoken.token}`;
    // await Signup_mail(email, VerifyMessage);

    return res.status(200).json({data: `your account has been created successfully.`});
  } catch (err) {
    console.log(err);
  }
};
