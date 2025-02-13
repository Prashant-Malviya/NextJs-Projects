"use client";
import { Button, Card, Form, Input, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
    try {
        const {data} = axios.get(url);

        return data;

    } catch (error) {
        
        throw new Error(error)
    }
}

const Admin = () => {

    const [responseData,setResponseData] = useState([]);


    const {data} = useSWR('/api/blog', fetcher);

    useEffect(()=>{

        setResponseData(data);
    },[responseData])

    // console.log("data",data)

  const createBlog = async (values) => {
    // console.log("values",values);

    try {
      const { data } = await axios.post("/api/blog", values, {
        "Content-Type": "application/json",
      });

    //   console.log("data", data);
    } catch (error) {
      message.error(error.response.data.message || error.message);
    }
  };

  console.log("responseData",responseData);
  

  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-7">
        <h1 className="text-4xl font-bold my-3">New Blog</h1>
        <Form layout="vertical my-5" onFinish={createBlog}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input size="large" placeholder="enter blog title here..." />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              size="large"
              placeholder="enter blog title here..."
              rows={10}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="col-span-5">
        {
            responseData && responseData.map((item,index)=> {
                <Card key={index}>
                    <h1 className="text-xl capitalize font-semibold">{item.title}</h1>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                </Card>
            })
        }
      </div>
    </div>
  );
};

export default Admin;
