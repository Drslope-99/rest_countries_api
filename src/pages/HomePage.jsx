import Countries from "../components/Countries";
export default function HomePage({ data, isLoading }) {
  return (
    <main>
      <Countries countries={data} isLoading={isLoading} />
    </main>
  );
}
