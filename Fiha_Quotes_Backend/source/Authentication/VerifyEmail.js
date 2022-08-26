const User_Info_Modal = require("../DB/QuotesModel/User_Info");
const Token = require("../DB/Token");

exports.VerifyEmail = async (req, res) => {
  try {
    const User = await User_Info_Modal.findOne({ _id: req.params.id });
    if (!User) {
      return res.status(400).send({ error: "Invalid link" });
    }
    const token = await Token.findOne({
      token: req.params.token,
      userid: req.params.id,
    });

    if (!token) {
      return res.status(400).send({ error: "Invalid Link" });
    }

    await User_Info_Modal.updateOne({ _id: User._id, verified: true });
    await Token.findByIdAndRemove(token._id);
    return res.status(200).send({data:"Email has been verified successfully."})

  } catch (err) {
    if (err) {
      res
        .status(500)
        .send({ error: "Internal server error has been occured." });
      console.log(`some error has been occurd. ${err}`);
    }
  }
};
