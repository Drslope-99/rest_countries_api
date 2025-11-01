import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import DropdownMenu from "./components/DropdownMenu";
import HomePage from "./pages/HomePage";
import { useTheme } from "./hook/useTheme";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <SearchInput>
        <DropdownMenu countries={countries} />
      </SearchInput>
      <HomePage data={countries} isLoading={isLoading} />
    </>
  );
}
