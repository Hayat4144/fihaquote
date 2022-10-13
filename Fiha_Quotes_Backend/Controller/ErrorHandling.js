exports.ErrorHandling = (code,err)=>{
        return res.status(code).send({error:err}) ;
}