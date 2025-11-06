import { Link } from "react-router-dom";
import styles from "./Countries.module.css";
import CountryCard from "./CountryCard";
import { memo } from "react";

function Countries({ countries, isLoading }) {
  return (
    <section className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        countries.map((country) => (
          <Link
            to={`/${country.alpha3Code}`}
            style={{ textDecoration: "none", color: "inherit" }}
            key={country.name}
          >
            <CountryCard country={country} />
          </Link>
        ))
      )}
    </section>
  );
}

export default memo(Countries);
