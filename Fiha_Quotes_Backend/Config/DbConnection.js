const mongoose = require('mongoose');
exports.DbConnection = ()=>{
    mongoose.connect(process.env.MONGO_DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("connected"))
      .catch((err) => {
        console.log(err);
      })
    
}