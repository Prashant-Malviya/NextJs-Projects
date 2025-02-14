import { NextResponse } from "next/server";
import BlogSchema from "@/schema/blog.schema";
import connectDB from "@/utils/db";

export const POST = async (request) => {
    try {
        await connectDB();

        const body = await request.json();
        const blog = new BlogSchema(body);
        await blog.save();

        return NextResponse.json({ success: true, data: blog }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
};

export const GET = async () => {
    try {
        await connectDB();

        const blogs = await BlogSchema.find().sort({ createdAt: -1 }); // Latest first
        return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
};
