import mongoose from 'mongoose';

async function connectDB(MONGODB_URI) {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection with MongoDB established successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB :', error);
    }
}

export default connectDB;
