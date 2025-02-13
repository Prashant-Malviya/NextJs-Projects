'use client'

import React from 'react'
import {Card,Button,Form, Input, message} from 'antd'
import Link from 'next/link'
import axios from 'axios'
import {useRouter} from 'next/navigation'

const Signup = () => {

  const router = useRouter();

  const signup = async (values)=>{
    try {
      await axios.post('/api/signup',values, {'Content-Type': 'application/json'})
      router.push('/login')
    } catch (error) {
      message.error(error.response.data.message || error.message)
    }
  }

  return (
    <div className='flex h-screen justify-center items-center'>
     <Card className='w-6/12 shadow-lg'>
        <h1 className='text-2xl font-semibold my-4'>Register Now</h1>

        <Form layout='vertical' onFinish={signup}>
            <Form.Item
            label="Fullname"
            name="fullname"
            rules={[{required:true}]}
            >
              <Input size='large' placeholder='Prashant Malviya' />
            </Form.Item>

            <Form.Item
            label="Email"
            name="email"
            rules={[{required:true}]}
            >
              <Input size='large' placeholder='prashant@mail.com' />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{required:true}]}
            >
              <Input size='large' placeholder='********' 
                type='password'
              />
            </Form.Item>

            <Form.Item>
              <Button size='large' htmlType='submit' type='primary'>Signup</Button>
            </Form.Item>

        </Form>

        <div className="flex items-center gap-3">
          <label>Already have an account ?</label>

          <Link href="/login" className="text-blue-600 font-medium">Signin Now</Link>
        </div>
     </Card>
    </div>
  )
}

export default Signup
