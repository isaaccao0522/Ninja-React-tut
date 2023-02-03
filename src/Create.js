import { useState} from "react";
import { useNavigate} from "react-router-dom";
import Axios from "axios";

const Create = () => {
  const [ title, setTitle] = useState ( "");
  const [ body, setBody] = useState ( "");
  const [ author, setAuthor] = useState ( "");
  const [ isPending, setIsPending] = useState ( false);
  const navigate = useNavigate ();

  const dataUrl = "https://jsonplaceholder.typicode.com/comments";

  const handleSubmit = async ( e) => {
    e.preventDefault ();

    const blog = { title, body, author};
    
    try {
      const createData = await Axios.post ( dataUrl,
        {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify ( blog)
        },
        setIsPending ( false)
      )
      console.log ( createData, "New blog added.");
        
    } catch (error) {
        console.log ( error.message);
    }
      navigate ( '/');
  };


  return (
    <section className="create">
      <h2>Add a new blog</h2>
      <form onClick={ handleSubmit}>
        <label>Blog title:</label>
        <input type="text"
          value={ title}
          onChange={ ( e) => setTitle ( e.target.value)}
          required
        />

        <label>Blog body:</label>
        <textarea 
          value={ body}
          onChange={ ( e) => setBody ( e.target.value)}
          required 
        />

        <label>Blog author:</label>
        <select 
          value={ author}
          onChange={ ( e) => setAuthor ( e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { isPending 
          ? ( <button disabled>
                Adding Blog...
              </button>)
          : ( <button>Add Blog</button>)
        }
      </form>
    </section>  
  );
};

export default Create;