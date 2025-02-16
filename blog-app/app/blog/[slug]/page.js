import Slug from '@/components/Slug'
import React from 'react'

// export const metadata = {
//   title: 
// } through this we are unable to make dynamic we will use following instead

export const generateMetadata = ({params})=> {
  return {
    title: `PrashantBlogs - ${params.slug}`
  }
}

const SlugRoute = async({params}) => {

    // console.log("params",params)
    // console.log("slugs from params",params.slug);

    const res = await fetch(`${process.env.SERVER}/api/blog/${params.slug}`)

    const data = await res.json();

    console.log("slug data - > ",data);
    
    
    return <Slug title={params.id} data = {data} />

  // return (
  //   <div>
  //     <Slug title={params.slug} />
  //   </div>
  // )
}

export default SlugRoute;

export const generateStaticParams = async()=> {//this function is only work at the time of deployement after the deployment it won't work.

  const res = await fetch(`${process.env.SERVER}/api/blog/slug-list`)

  const data = await res.json();

  // console.log('data',data);
  
  return data.map((slug)=>({
    slug: slug
  }))
  

}
