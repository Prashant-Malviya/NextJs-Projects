import { NextResponse as res } from "next/server";
import BlogSchema from "@/schema/blog.schema";
import mongoose from "mongoose";

const isId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
}

export const PUT = async (request, { params }) => {
  try {
    const body = await request.json();
    const blog = await BlogSchema.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!blog) {
      return res.json()(
        {
          success: false,
          message: "Id not found",
        },
        {
          status: 404,
        }
      );
    }

    return res.json(blog);
  } catch (error) {}

  return res.json({ success: true });
};

export const DELETE = async (request, { params }) => {
  try {
    const blog = await BlogSchema.findByIdAndDelete(params.id);

    if (!blog) {
      return res.json(
        { success: false, message: "Id not found" },
        { status: 404 }
      );
    }

    return res.json(blog);
  } catch (error) {
    // console.log(error);

    return res.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};

export const GET = async (request, { params }) => {
  try {
    // console.log("params id__->",params.id);
    
    const isMongoId = isId(params.id);

    // console.log("id",id);
    
    const query = (isMongoId ? {_id: params.id} : {title: params.id.split("-").join(" ")})

    const blog = await BlogSchema.findOne(query);

    if (!blog) {
      return res.json(
        { success: false, message: "Id not found" },
        { status: 404 }
      );
    }

    return res.json(blog);
  } catch (error) {
    return res.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};



