import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Already connected to MongoDB");
        return;
    }
    
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
