import { useState, useEffect } from "react";

export const useFetch = (url, params = {}) => {
  // Initalize state
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Create function to gather data
  const getData = async () => {
    const response = await fetch(url, params);
    const fetchedData = await response.json();

    // Reset states
    setData(fetchedData);
    setIsLoading(false);
  };

  // Call the function on mount
  useEffect(() => {
    getData();
  }, [url]);

  // Return states
  return [isLoading, data];
};
