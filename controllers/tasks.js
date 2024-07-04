const Task = require("../models/tasks");
const getAllTasks = async (req, res) => {
    try {
        c
        const tasks = await Task.find();
        res.status(200).json({ tasks });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ msg: "There was an error fetching tasks. Please try again later." });
    }
};
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({task});
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
const getTask = async(req, res) => {
    try {
        const {id}=req.params;
        const task = await Task.findOne({_id:id})
        
        if(!task){
            return res.status(404).json({msg:`No document with id ${id} found`});
        }
        res.status(201).json({task});
      } catch (error) {
        res.status(500).send({ msg: error });
      }
  
};
const updateTasks = async(req, res) => {
    try {
        const {id}=req.params;
        const task = await Task.findOneAndUpdate({_id:id},req.body,{
            new:true,//returns the new name in res.send
            runValidators:true//runs the validating conditions defined in model
        })
        
        if(!task){
            return res.status(404).json({msg:`No document with id ${id} found`});
        }
        res.status(201).json({task});
      } catch (error) {
        res.status(500).send({ msg: error });
      }
};
const deleteTasks = async(req, res) => {
    try {
        const {id}=req.params;
        const task = await Task.findOneAndDelete({_id:id})
        
        if(!task){
            return res.status(404).json({msg:`No document with id ${id} found`});
        }
        res.status(201).json({task});
      } catch (error) {
        res.status(500).send({ msg: error });
      }
};
module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks,
};
