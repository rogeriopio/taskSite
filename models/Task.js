import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must have a name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characthers'],
    },
    completed: { type: Boolean, default: false },
});
// const TaskSchema = new mongoose.Schema({
//     name: String,completed:  Boolean
// });                      //colection-table
const Task = mongoose.model('Task', TaskSchema);
export default Task;
