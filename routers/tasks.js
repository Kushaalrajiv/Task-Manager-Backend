const express=require('express');
const { getAllTasks, createTasks, getTask, updateTasks, deleteTasks } = require('../controllers/tasks');
const router=express.Router();

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks);

module.exports=router;

