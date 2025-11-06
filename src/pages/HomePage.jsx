import Countries from "../components/Countries";
import Header from "../components/Header";
import DropdownMenu from "../components/DropdownMenu";
import SearchInput from "../components/SearchInput";
import { useState, useMemo } from "react";
import SearchComponents from "../components/SearchComponents";

export default function HomePage({ data, isLoading }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = useMemo(() => {
    return data.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchRegion = !region || c.region === region;
      return matchSearch && matchRegion;
    });
  }, [data, search, region]);

  return (
    <>
      <Header />
      <SearchComponents>
        <SearchInput value={search} onSearch={setSearch} />
        <DropdownMenu countries={data} region={region} setRegion={setRegion} />
      </SearchComponents>

      <main>
        <Countries countries={filteredCountries} isLoading={isLoading} />
      </main>
    </>
  );
}
