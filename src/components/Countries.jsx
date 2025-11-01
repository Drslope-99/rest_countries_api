import styles from "./Countries.module.css";
import CountryCard from "./CountryCard";

export default function Countries({ countries, isLoading }) {
  return (
    <section className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        countries.map((country) => (
          <CountryCard country={country} key={country.name} />
        ))
      )}
    </section>
  );
}
