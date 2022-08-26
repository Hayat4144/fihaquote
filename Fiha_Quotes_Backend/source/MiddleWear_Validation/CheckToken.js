const jwt = require('jsonwebtoken') ;

exports.IsValidToken= (req,res,next) =>{
  try{
      const Istoken = req.cookies['token'] ;
      console.log(Istoken)
      if(!Istoken){
       return res.status(401).json({
          error:"Access Denied"
        })
      }
      const token = jwt.verify(Istoken,process.env.JWT_SECRET,(err,data)=>{
        if(err){
         return res.status(401).json({
            error:err
          })
        }
        else{
          req.user = data ;
          next()
        }
        
      })
  }
  catch(err){
    console.log(err)
  }
}