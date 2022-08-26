const nodemailer = require("nodemailer");

exports.Signup_mail = async (email,otp) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  let mailoption = {
    from: process.env.USER,
    to: `${email}`,
    subject: "node js nodemailer ",
    text: "Chasmiali",
    html: `<p>Welcome to the FihaQuotes</p>
        <p>To Verify your email click below link</p>
        <a href="${otp}">click here to verify your email</a>
    
    ` ,
  };

  transporter.sendMail(mailoption, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};
