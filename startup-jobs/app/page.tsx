import Hello from "./components/Hello";


export default function Home() {

  console.log("what am i ? -- server/client")

  return (
    <>
    
    <h1 className="text-3xl">Welcome to nextjs</h1>

    <Hello />

    </>
  );
}
