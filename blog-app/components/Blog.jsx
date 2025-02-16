"use client";

import { Card } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const Blog = ({ data }) => {
  // in this componet the code runs according to requirement if rerquire on server to execute so that portion will be render on server while if require on client then that would be render on client

  //infact this code will be on both server as well as on client

  console.log("data", data);

  return (
    <div className="flex flex-col gap-8">
      <div className="w-8/12 mx-auto space-y-16">
        {data?.map((item, index) => (
          <Link key={index} href={`/blog/${item.title.split(" ").join("-")}`}>
            <Card hoverable>
              <h1 className="capitalize text-2xl font-semibold">
                {item.title}{" "}
              </h1>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
