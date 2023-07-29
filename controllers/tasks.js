import { createCustomError } from '../errors/custom-error.js';
import asyncWrapper from '../middleware/async.js';
import Task from '../models/Task.js';

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({
        status: 'success',
        data: { tasks, nbHits: tasks.length },
    });
});
const createTasks = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);

    res.status(201).json({ sucess: true, task });
});

const getTask = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    if (!task) {
        return next(createCustomError(`Dont found task with id: ${id}`, 404));
    }
    return res.status(200).json({ task });
});

const updateTask = async (req, res, next) => {
    const taskId = req.params.id;
    const updateData = req.body;
    try {
        const task = await Task.updateOne({ _id: taskId }, updateData);
        if (task.matchedCount === 0) {
            return next(createCustomError(`Dont found task with id: ${taskId}`, 404));
        }

        res.status(201).json({ sucess: true, task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;

    const task = await Task.deleteOne({ _id: id });
    if (task.deletedCount === 0) {
        return next(createCustomError(`Dont found task with id: ${id}`, 404));
    }
    res.status(200).json({ task });
});
export { getAllTasks, createTasks, getTask, updateTask, deleteTask };
