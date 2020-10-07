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

      if (mounted) {
        response.status === "error"
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