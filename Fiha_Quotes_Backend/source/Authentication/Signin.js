const User_Info_Modal = require('../DB/QuotesModel/User_Info')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

exports.Sigin = async(req,res)=>{
    res.set({
        'X-Frame-Options': 'DENY' ,
        'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': 0 ,
        'X-XSS-Protection': 1 ,
        'X-XSS-Protection': 1, 
        'mode':'block' ,
        'X-XSS-Protection': 1,
        'report':'<reporting-uri>'
    })
    try{
        const {email,password} = req.body ;
        const IsUser = await User_Info_Modal.findOne({email:email}) ;
        if(!IsUser){
            return res.status(400).send({error:'Invalid email/password ....'})
        }
        if(IsUser && (await bcrypt.compare(password,IsUser.password))){
            const token = jwt.sign({
              id:IsUser._id,
              username:IsUser.username,
              role:IsUser.IsApplicationUser,
            },process.env.JWT_SECRET) ;
            res.cookie('token',token,{
                httpOnly:true,
                expires:new Date(Date.now() + 900000),
                SameSite:'none',
                
            })
          return res.status(200).send({data:'Loging Successful.'})
          }
          else{
            return res.status(400).send({error:'Invalid email/password .'})
          }
        
    }catch(err){
        console.log(err)
    }
}

