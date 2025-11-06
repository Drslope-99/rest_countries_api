import Header from "../components/Header";
import BackButton from "../components/BackButton";
import CountryDetails from "../components/CountryDetails";

export default function CountryDetailsPage({ countries, isLoading }) {
  return (
    <>
      <Header />
      <BackButton />
      <CountryDetails countries={countries} isLoading={isLoading} />
    </>
  );
}
