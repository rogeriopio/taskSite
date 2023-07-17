import express from 'express';

const app = express();
const port = 3000;
app.get('/hello', (req, res) => {
    res.send('hello');
});

// app.get('/api/v1/tasks') --get all tasks
// app.get('/api/v1/tasks/:id') --get single task
// app.post('/api/v1/tasks') --create a new tasks
// app.patch ('/api/v1/tasks/:id') --update a task
// app.delete  ('/api/v1/tasks/:id') --delete a task
app.listen(port, console.log(`Running on port ${port}`));
