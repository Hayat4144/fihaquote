const Userinfomodals = require("../../../DB/QuotesModel/User_Info");
const UserProfilemodals = require("../../../DB/QuotesModel/User_Profile");

exports.User_Profile = async (req, res) => {
  try {
    // getting user details
    const { FirstName, DOB, Gender, Description } = req.body;

    // getting user id
    const UserId = req.user.id;

    // check is user valid
    const IsUserValid = await Userinfomodals.find({ _id: UserId });

    //if user not valid throw error
    if (!IsUserValid) {
      res.status(401).send({
        error: "Acess denied",
      });
    }

    // save user data in database
    await UserProfilemodals.create(
      {
        userid: UserId,
        Name: FirstName,
        Date_of_Birth: DOB,
        Gender: Gender,
        Description: Description,
        address: {
          city: req.body.city,
          State: req.body.State,
          Country: req.body.Country,
        },
      },
      (err, data) => {
        if (err) {
          throw err;
        }
        console.log(data); // debuging
        res
          .status(200)
          .send({ data: "Your profile has been updated successfully. " });
      }
    );
  } catch (err) {
    console.log(err);
  }
};
