import React from "react";
import styles from "./CountryCard.module.css";
export default function CountryCard({ country }) {
  return (
    <article className={styles.country}>
      <figure className={styles.countryImage}>
        <img src={country.flags.png} alt="" />
      </figure>
      <div className={styles.countryDetails}>
        <h3 className={styles.countryTitle}>{country.name}</h3>
        <p className={styles.countryText}>
          Population: <span>{country.population.toLocaleString()}</span>
        </p>
        <p className={styles.countryText}>
          Region: <span>{country.region}</span>
        </p>
        <p className={styles.countryText}>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </article>
  );
}
