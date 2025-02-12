import UserSchema from '@/schema/user.schema';
import {NextResponse as res} from 'next/server';
import bcrypt from 'bcrypt';

export const POST = async(request)=>{

    try {
        const {email,password} = await request.json();
        
        const user = await UserSchema.findOne({email})
        
        if(!user){
            return res.json(
                {success: false, message: 'User does not exists'},
                {status:404}
            )
        }

       const isLogin = await bcrypt.compare(password,user.password);

       if(!isLogin){
        return res.json(
            {success: false, message: 'Incorrect Password'},
            {status: 401}
        )
    }
    return res.json({success:true})


    } catch (error) {
        return res.json(
            {success:false},
            {status:500},
        )
    }
}