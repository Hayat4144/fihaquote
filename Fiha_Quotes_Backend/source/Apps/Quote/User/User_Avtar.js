const cloudinary = require("cloudinary").v2;
const User_Info = require("../../../DB/QuotesModel/User_Info");
const User_Avtar = require("../../../DB/QuotesModel/Avtar");

exports.User_Avtar = async (req, res) => {
  try {
    // convert from buffer fo string
    var buf = req.file.buffer.toString("base64");
    console.log(req.file)
    console.log(req.file.buffer)
    // save to cloudinary
    await cloudinary.uploader.upload(
      "data:image/png;base64," + buf,
      { folder: "Quotes/UsersAvtar" },
      async (err, result) => {
        if (!err) {
          // get user id
          const UserId = req.user.id;

          // check is user present or not
          const IsValidUser = await User_Info.find({ _id: UserId });

          //   throw error
          if (!IsValidUser) {
            return res.status(403);
          }

          // create avtar for user
          const Avtar = await User_Avtar.create({
            userid: IsValidUser[0]._id,
            profileurl: result.secure_url,
          });

          res.status(200).send({
            message: "your image has been uploaded successfully.",
            Avtar,
          });
        }
        console.log(err);
      }
    );
    // end of cloudinary
  } catch (error) {
    console.log(error);
  }
};
