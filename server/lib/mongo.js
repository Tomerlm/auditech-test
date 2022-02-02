import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_CONNECTION);

export default mongoose;
