
const User_Info_Modal = require("../DB/QuotesModel/User_Info");
const bcrypt = require("bcrypt");
exports.ChangePassword = async (req, res) => {
  try {
    const { currentpassword, newpassword, confirmpassword } = req.body;
    if(confirmpassword != newpassword){
        return res.status(400).json({error:"Password does not match."})
    }
    const User = req.user;
    const UserId = User.id;
    const IsUser = await User_Info_Modal.findOne({ _id: UserId });
    const IsPasswordMatch = await bcrypt.compare(currentpassword,IsUser.password );
    if (IsUser && IsPasswordMatch) {
      const saltRound = 10;
      const hashpassword = await bcrypt.hash(newpassword, saltRound);
      const changepassword = await User_Info_Modal.findByIdAndUpdate(UserId,{ password: hashpassword },{ new: true })
	    return res.status(200).json({ data: "Your password has been changed successful."});
    } else {
      return res.status(401).json({ error: "Invalid Password  Try again." });
    }
  } catch (err) {
    console.log(err);
  }
};
