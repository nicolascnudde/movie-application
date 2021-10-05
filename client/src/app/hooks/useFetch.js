import {
  useState, 
  useEffect 
} from 'react';

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    }
    
    getData();
  }, [api]);

  return [data, isLoading, error];
}

export default useFetch;
