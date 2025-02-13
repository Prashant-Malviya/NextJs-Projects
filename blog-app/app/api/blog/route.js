import BlogSchema from "@/schema/blog.schema"
import { NextResponse as res } from "next/server"

export const POST = async(request)=> {
    
    try {
        const body = await request.json();

        const blog = new BlogSchema(body);

        await blog.save() // since save is a promsiable function so thats by we have used await

        return res.json(blog);

        new BlogSchema()
    } catch (error) {
        return res.json(
            {success: false, message: error.message},
            {status: 500}
        )
    }
}

export const GET = async(res)=> {
    
    try {
        
        const blogs = await BlogSchema.find()

        return res.json(blogs);


        
    } catch (error) {
        return res.json(
            {success: false, message: error.message},
            {status: 500}
        )
    }
}