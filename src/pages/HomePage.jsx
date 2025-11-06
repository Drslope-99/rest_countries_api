import Countries from "../components/Countries";
import Header from "../components/Header";
import DropdownMenu from "../components/DropdownMenu";
import SearchInput from "../components/SearchInput";

export default function HomePage({ data, isLoading }) {
  return (
    <>
      <Header />

      <SearchInput>
        <DropdownMenu countries={data} />
      </SearchInput>

      <main>
        <Countries countries={data} isLoading={isLoading} />
      </main>
    </>
  );
}
