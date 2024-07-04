const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({name:{
    type:String,
    required:[true,'must provide name'],
    maxlength:[20,'max length allowed is 20'],
    trim:true
    
},completed:{
    type:Boolean,
    default:false
}});

module.exports=mongoose.model('Task',TaskSchema);