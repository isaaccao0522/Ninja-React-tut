import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <section className="404">
      <h1>Sorry!!</h1>
      <p>The page cannot be found.</p>
      <Link to='/'>
        Back to home ^^
      </Link>
    </section>
  );
};


export default Notfound;