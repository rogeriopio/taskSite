import Task from '../models/Task.js';

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ sucess: true, task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOne({ _id: id });
        if (!task) {
            return res.status(404).json({ msg: `Task not found with id: ${id}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const updateTask = async (req, res) => {
    const taskId = req.params.id;
    const updateData = req.body;
    try {
        const task = await Task.updateOne({ _id: taskId }, updateData, {
            new: true,
            runValidators: true,
        });
        if (task.matchedCount === 0) {
            return res.status(404).json({ msg: `Task not found with id: ${taskId}` });
        }
        res.status(201).json({ sucess: true, task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.deleteOne({ _id: id });
        if (task.deletedCount === 0) {
            return res.status(404).json({ msg: `Task not found with id: ${id}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
export { getAllTasks, createTasks, getTask, updateTask, deleteTask };
