import { useState, useEffect } from "react";

// Cache to store fetched data
const cache = {};

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      // Check if the data is already cached
      if (cache[url]) {
        setData(cache[url]); // Use cached data
        return; // Skip fetching
      }

      setLoading(true);

      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        cache[url] = result; // Cache the fetched data
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
      setLoading(false);
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
