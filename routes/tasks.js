import express from 'express';
import {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask,
} from '../controllers/tasks.js';

const router = express.Router();

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

// app.get('/api/v1/tasks') --get all tasks
// app.get('/api/v1/tasks/:id') --get single task
// app.post('/api/v1/tasks') --create a new tasks
// app.patch ('/api/v1/tasks/:id') --update a task
// app.delete  ('/api/v1/tasks/:id') --delete a task

export { router };
