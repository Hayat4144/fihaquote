const nodemailer = require('nodemailer') ;


exports.EmailVerify = async (email,otp)=>{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.USERNAME,
            pass:process.env.PASSWORD,
        }
    })

    let mailoption = {
        from :process.env.USER,
        to:`${email}`,
        subject:'Verify your email',
        html: `<p>Welcome to the FihaQuotes</p>
        <p>To Verify your email click below link</p>
        <a href="${otp}">click here to verify your email</a>
    
    ` ,
    }

    // send email 
    transporter.sendMail(mailoption,(err,info)=>{
        ! err ? console.log(info) : console.log(err)
    })
}
