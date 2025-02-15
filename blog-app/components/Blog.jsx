'use client'

import { Card } from 'antd';
import React, {useState} from 'react'

const Blog = ({data}) => {

  // in this componet the code runs according to requirement if rerquire on server to execute so that portion will be render on server while if require on client then that would be render on client

  //infact this code will be on both server as well as on client

  console.log("data",data);
  
  return (
    <div>
      <div className='w-8/12 mx-auto space-y-8'>
        {
          data?.map((item,index)=>(
            <Card hoverable key={index}>
              <h1 className='capitalize text-2xl font-semibold'>{item.title} </h1>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Blog
