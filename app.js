const connectDB=require('./db/connect');
const express=require("express");
const app=express();
const tasks=require('./routers/tasks');
const notfound=require('./middleware/not-found');
require('dotenv').config();
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks',tasks);
app.use(notfound);

const port = 3000;

const start= async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server listening on port${port}`));
    }
    catch(error){
        console.log(error);
    }
}

start();

