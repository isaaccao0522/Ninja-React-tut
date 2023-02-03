import React from 'react';
import { useState, useEffect} from 'react';
import Axios from 'axios';

//Others
import BlogList from './BlogList';
import useFetch from './useFetch';


const dataUrl = "https://jsonplaceholder.typicode.com/comments";


const Home = () => {

  const { data: blogs, isPending, error} = useFetch ( dataUrl);

  
  return (
    <main className="home">
      { error
        ? ( <h1>Loading ....</h1>)
        : ( null)
      }
      { isPending 
        ? ( <h1>Loading ....</h1>)
        : null
      }
      { blogs 
        ? (<BlogList blogs={ blogs} 
              title="All Blogs" 
            />
          )
        : null
      }
    </main>
  );
};


export default Home;