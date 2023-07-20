import express from 'express';
import dotenv from 'dotenv';
import { router as tasksRouter } from './routes/tasks.js';
import connectDB from './db/connect.js';

dotenv.config();
const uri = process.env.MONGODB_URI;
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send('hello');
});

app.use('/api/v1/tasks', tasksRouter);

const start = async () => {
    try {
        await connectDB(uri);
        app.listen(port, console.log(`Running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();
