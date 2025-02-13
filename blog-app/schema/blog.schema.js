import mongoose, {Schema} from "mongoose";
const blogSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true, // means it will cache from server and give the fast response
    },
    description: {
        type: String,
        required: true,
        trim: true,
    }

})

mongoose.models = {}

const BlogSchema = mongoose.model("Blog",blogSchema)

export default BlogSchema;