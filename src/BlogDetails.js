import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

//Others
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id} = useParams ();
  const { isPending, data: blog, error} = useFetch ( 'https://jsonplaceholder.typicode.com/comments/' + id);

  const navigate = useNavigate ();

  const handleDelete = async () => {
    try {
      const deleteData = await Axios.delete ( 'https://jsonplaceholder.typicode.com/comments/' + blog.id,
        { method: "DELETE"}
      )
      console.log ( deleteData, "Blog deleted.");
      navigate ( '/');
    } catch ( error)  {
      console.log ( error.message);
    }
  };


  return (
    <section className="blog-details">
      { isPending 
        ? ( <h1>Loading ...</h1>)
        : error
        ? ( <div>{ error }</div>)
        : blog
        ? (
            <article>
              <h1>{ blog.name}</h1>
              <p>Write by: { blog.email}</p>
              <div>{ blog.body}</div>
              <button onClick={ handleDelete}>
                Delete
              </button>
            </article>
          )
        : null
      } 
    </section>
  );
};


export default BlogDetails;