import Blog from "@/components/Blog";

export const metadata = {
  title: "Blogs",
};

export const revalidate = 86400; // through this we set the time for isr process

const BlogRoute = async () => {
  const blogs = await fetch(`${process.env.SERVER}/api/blog`);

  const data = await blogs.json();

  console.log("data", data);

  return <Blog data={data}/>;
};

// if nextjs12 version then we will use a seperate method and export them for server side rendering (ssr) purpose , below is an example

// export const getServerSideProps = ()=> {

// }

export default BlogRoute;
