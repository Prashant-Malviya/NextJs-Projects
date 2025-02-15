import Home from '@/components/Home'

export const metadata = {
  title: "Homepage",
};

const Homepage = async() => { //this page is on server
  

  return (
    <div>
      <Home/>
    </div>
  );
};



export default Homepage;
