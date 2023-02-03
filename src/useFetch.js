import { useState, useEffect} from 'react';
import Axios from 'axios';


const useFetch = ( dataUrl) => {
  const [ data, setData] = useState ( null);

  const [ isPending, setIsPending] =useState ( true);
  
  const [ error, setError] = useState ( null);

  useEffect ( () => {
    
    setTimeout ( () => {
      try {
        const getData = async () => {
          const res = await Axios.get ( dataUrl);
          const data = res.data;

          setData ( data);
          setIsPending ( false);
          setError ( null);
        };
        getData ();
       
      } catch ( error) {
        isPending ( false);
        setError ( error.message);
      }
    }, 1000);

  }, [ dataUrl]);

  return { data, isPending, error};
};

export default useFetch;