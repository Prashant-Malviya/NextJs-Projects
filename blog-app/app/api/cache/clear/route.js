import { NextResponse as res } from "next/server"
import { revalidatePath } from "next/cache"

export const POST = async(request)=> {

    const body = await request.json();

    const data = body.paths.map((item)=>{
        revalidatePath(item) // it will first delete the cache
        return {
            path: item,
            deletedAt: Date.now()
        }
    })

    // revalidatePath('/blog')
    return res.json(data)
}