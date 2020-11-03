import { useState, useEffect } from "react";

/**
 *
 * useApi
 *
 * Accepts:
 * - apiCallback, param
 *
 * Returns:
 * - isLoading
 * - error
 * - data
 */
const useAPI = (apiCallback, param = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      const response = await apiCallback(param);

      console.log("This is the response:", response)

      if (mounted) {
        (response.status === "error" || response.data?.status === "invalid")
          ? setError(response.message)
          : setData(response.message);
        setIsLoading(false);
      }
    };

    getData();
    return () => (mounted = false);
  }, [apiCallback, param]);

  return [isLoading, error, data];
};

export default useAPI;