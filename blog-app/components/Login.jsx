"use client";

import React from "react";
import { Card, Button, Form, Input, message } from "antd";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {

  const router = useRouter();

  const login = async(values) => {
    try {
      await axios.post('/api/login',values, {'Content-Type': 'application/json'})
      router.push('/admin')
    } catch (error) {
      message.error(error.response.data.message || error.message)
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-6/12 shadow-lg">
        <h1 className="text-2xl font-semibold my-4">Signin Now</h1>

        <Form layout="vertical" onFinish={login}>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input size="large" placeholder="prashant@mail.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="********" type="password" />
          </Form.Item>

          <Form.Item>
            <Button size="large" htmlType="submit" type="primary">
              Signin
            </Button>
          </Form.Item>
        </Form>

        <div className="flex items-center gap-3">
          <label>Don't have an account ?</label>

          <Link href="/signup" className="text-blue-600 font-medium">Register Now</Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
