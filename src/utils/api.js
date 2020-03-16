import { useState, useEffect } from 'react';
import axios from 'axios';

function Api(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
        setIsLoading(true);
        setError();

        const result = await axios(url)
            .catch(error =>{
                setError(error)
            });

         setData(result.data)
        setIsLoading(false);
    }
    fetchData();
    }, [url]);
    return {
      data,
      error,
      isLoading
  }
}

export default Api;