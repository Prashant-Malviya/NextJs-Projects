
const page = ({ params }: { params: { id: string}}) => {

    const {id} = params;

    // useParams() : 

    return (
      <div>
        dynamic route

        <h1 className="text-3xl">user details page id : {id}</h1>
      </div>
    )
  }
  
  export default page
  