import { Card } from 'antd';
import React from 'react'

const Slug = async({title,data}) => {
    

  return (
    <div>
      <Card>
        <h1 className='text-3xl font-bold capitalize'>{title.split("-").join(" ")}</h1>
        <p>{data.description}</p>
      </Card>
    </div>
  )
}

export default Slug
