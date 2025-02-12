import "@/utils/db";
import UserSchema from "@/schema/user.schema";
import { NextResponse as res } from "next/server";

export const POST = async (request) => {
  try {
    
    const body = await request.json();

    const user = new UserSchema(body);
    await user.save();

    return res.json(user);

  } catch (error) {
    
    return res.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
