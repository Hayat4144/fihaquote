// getting all functions and model 
const Users_Info = require('../../../DB/QuotesModel/User_Info') ;
const Users_Post_Model = require('../../../DB/QuotesModel/User_Post') ;
const Post_Text_media = require('../../../DB/QuotesModel/Text_Media_Post') ;
const Image_Video_Post_Model = require('../../../DB/QuotesModel/Image_Video_Post')
const cloudinary = require('cloudinary').v2 ;

exports.User_Post= async(req,res)=>{
   
    try {
        var IsUser ;
        const {quote} = req.body ;
        const UserId = req.user.id ; // getting id from cookie in middelwear

        // validation for valid user
        const Is_ValidUser_func= async()=>{
            IsUser = await Users_Info.find({_id:UserId}) ;
            if(!IsUser){
               return res.status(403);
            }
        }

        // calling above validation function to verify user
        Is_ValidUser_func() ;

        // create text document and image document
        const CreateDocumentFunc= async(data,result)=>{
            await Image_Video_Post_Model.create({
                Post_id:data._id,
                image_url:result.secure_url
            },async(err,data)=>{
                if(!err){
                    // create post text documents
                   await Post_Text_media.create({
                        Post_id:data.Post_id,
                        Quote_Text:quote
                    },(err,data)=>{
                        if(!err){
                            res.status(200).send("everything is fine")
                        }
                        res.status(400)
                    })
                }
                console.log(err)
            })
        }

        // upload image to cloudinary
        const UploadImagefunc =async(data)=>{
            var buf = req.file.buffer.toString('base64') ;
            await cloudinary.uploader.upload("data:image/png;base64,"+ buf,{folder:"Quote/PostImage"},async(err,result)=>{
                if(!err){
                   CreateDocumentFunc(data,result)
                }
            }) 
           
        }   

        const Text_Media_Post_func=async(err,data)=>{
            if(req.file){
                //upload image to cloudinary and create document 
                UploadImagefunc(data)
            }
            else{
                // create text document
               await Post_Text_media.create({
                    Post_id:data.Post_id,
                    Quote_Text:quote
                },(err,data)=>{
                    if(!err){
                        res.status(200).send("everything is fine")
                    }
                    res.status(400)
                })

            }
        }

        // used settimeout bcz of await function is used in valid user function it take some time to resolve
        setTimeout(async() => {
            await Users_Post_Model.create({
                User_id:IsUser[0]._id,
            },Text_Media_Post_func)
        }, 2000);
        
    } catch (error) {
        console.log(error)
    }
}
