import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
    {
        title: { type: String, required: true, trim: true, unique: true, index: true },
        description: { type: String, required: true, trim: true },
    },
    { timestamps: true } // ✅ Automatically adds `createdAt` and `updatedAt`
);

const BlogShema = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default BlogShema;
