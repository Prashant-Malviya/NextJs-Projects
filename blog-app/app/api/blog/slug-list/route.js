import "@/utils/db"
import BlogShema from "@/schema/blog.schema"
import { NextResponse as res } from "next/server"


export const GET = async(request)=>{

    const titles = await BlogShema.distinct('title')

    const slugs = titles.map((item)=>item.split(" ").join("-"));
    return res.json(slugs)
}