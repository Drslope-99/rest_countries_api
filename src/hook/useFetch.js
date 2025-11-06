import { useState, useEffect } from "react";

export default function useFetch() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setIsLoading(true);
        const response = await fetch("/data.json");
        if (!response.ok)
          throw new Error("Something went wrong, failed to fetch");

        const data = await response.json();

        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountries();
  }, []);

  return { isLoading, countries };
}
