import { useEffect, useState } from "react";

const useFetch = (service, id) => {
  const [errors, setErrors] = useState("");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {

    try {
      if (id) {
        const response = await service(id)
        
        setData(response);
      } else {
        const response = await service();
        setData(response.data);
      }
    } catch (error) {
        
      setErrors(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    errors,
    data,
    isLoading,
  };
};

export default useFetch;
