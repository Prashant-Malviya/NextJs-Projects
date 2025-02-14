"use client";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message, Spin, Empty } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

// Fetcher function for SWR
const fetcher = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data || []; // Ensure we return an array
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch data");
  }
};

const Admin = () => {

    const [currentEditId, setCurrentEditId] = useState(null);

  const {
    data: blogs,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/blog", fetcher);
  

  const [form] = Form.useForm();


  // Handle API error
  useEffect(() => {
    if (error) message.error("Failed to fetch blogs: " + error.message);
  }, [error]);

  // Create Blog
  const createBlog = async (values) => {
    try {
      await axios.post("/api/blog", values, {
        headers: { "Content-Type": "application/json" },
      });
      message.success("Blog created successfully!");
      mutate('/api/blog'); // Refresh the blog list
      form.resetFields();
    } catch (error) {
      message.error(error.response?.data?.message || "Error creating blog");
    }
  };

  // Delete Blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`/api/blog/${id}`);
      message.success("Blog deleted successfully!");
      mutate(); // Refresh the blog list
    } catch (error) {
      message.error("Error deleting blog");
    }
  };

  const updateBlog = (item) => {
    console.log('item',item);
    
    form.setFieldsValue(item);
    setCurrentEditId(item._id);
    console.log("currentEditId",currentEditId);
    
  };

  const saveBlog = async(values) => {
    try {
        await axios.put(`/api/blog/${currentEditId}`, values, {'Content-Type:':'application/json'})

        mutate('/api/blog') // whatever define in swr we pass that in mutate method
        form.resetFields();
        setCurrentEditId(null);
    } catch (error) {
        
    }
  }

  return (
    <div className="grid grid-cols-12 gap-12">
      {/* Create Blog Form */}
      <div className="col-span-7">
        <h1 className="text-4xl font-bold my-3">New Blog</h1>
        <Form layout="vertical" onFinish={currentEditId ? saveBlog : createBlog} form={form}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input size="large" placeholder="Enter blog title here..." />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              size="large"
              placeholder="Enter blog description..."
              rows={5}
            />
          </Form.Item>

          {currentEditId ? (
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" danger>
                Save
              </Button>
            </Form.Item>
          ) : (
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Create
              </Button>
            </Form.Item>
          )}

        </Form>
      </div>

      {/* Blog List */}
      <div className="col-span-5">
        <h1 className="text-2xl font-semibold mb-3">Blogs</h1>

        {/* Show loading spinner */}
        {isLoading && (
          <div className="flex justify-center my-5">
            <Spin size="large" />
          </div>
        )}

        {/* Show blogs if available */}
        {!isLoading && blogs?.length > 0
          ? blogs.map((item) => (
              <Card
                key={item._id}
                hoverable
                actions={[
                  <EditOutlined key="edit" onClick={() => updateBlog(item)} />,
                  <DeleteOutlined
                    key="delete"
                    onClick={() => deleteBlog(item._id)}
                  />,
                ]}
              >
                <h1 className="text-xl capitalize font-semibold">
                  {item.title}
                </h1>
                <p className="text-gray-500 text-sm">
                  {item.description?.slice(0, 100)}...
                </p>
              </Card>
            ))
          : // Show empty state when no blogs
            !isLoading && <Empty description="No blogs found" />}
      </div>
    </div>
  );
};

export default Admin;
