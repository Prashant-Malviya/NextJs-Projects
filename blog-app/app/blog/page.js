import Blog from "@/components/Blog";

export const metadata = {
  title: "Blogs",
};

const BlogRoute = async () => {
  const blogs = await fetch("http://localhost:3000/api/blog");

  const data = await blogs.json();

  console.log("data", data);

  return <Blog data={data}/>;
};

// if nextjs12 version then we will use a seperate method and export them for server side rendering (ssr) purpose , below is an example

// export const getServerSideProps = ()=> {

// }

export default BlogRoute;
