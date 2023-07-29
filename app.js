import express from 'express';
import dotenv from 'dotenv';
import { router as tasksRouter } from './routes/tasks.js';
import connectDB from './db/connect.js';
import notFound from './middleware/not-found.js';
import errorHandleMiddleware from './middleware/error-handler.js';

dotenv.config();
const uri = process.env.MONGODB_URI;
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/tasks', tasksRouter);
app.use(notFound);
app.use(errorHandleMiddleware);
const start = async () => {
    try {
        await connectDB(uri);
        app.listen(port, console.log(`Running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();
