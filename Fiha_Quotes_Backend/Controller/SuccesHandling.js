exports.SuccessHandling = (code,data) =>{
    return res.status(code).send({data}) ;
}