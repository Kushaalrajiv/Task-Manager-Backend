const mongoose=require('mongoose');

const connectDB=(url) =>{
    return mongoose.connect(url,{
    //this is to remove deprecation warnings , not required if mongoose v6
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false,
});

}

module.exports=connectDB;