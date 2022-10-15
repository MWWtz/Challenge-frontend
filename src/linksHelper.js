import { useEffect, useState } from "react";

export const useList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://picsum.photos/v2/list");
      const json = await data.json();
      setResults(json);
    };
    fetchData().catch(console.error);
  }, []);

  return results;
};
