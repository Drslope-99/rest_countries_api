import { useParams, Link } from "react-router-dom";
import styles from "./CountryDetails.module.css";

export default function CountryDetails({ countries }) {
  const { countryCode } = useParams();
  const country = countries?.find((c) => c.alpha3Code === countryCode);
  console.log(country.borders);

  return (
    <section className={styles.container}>
      <figure className={styles.imgContainer}>
        <img src={country.flags.svg} />
      </figure>
      <article className={styles.countryDetails}>
        <h1>{country.name}</h1>
        <div className={styles.detailList}>
          <ul>
            <li>
              Native Name: <span>{country.nativeName}</span>
            </li>
            <li>
              Population:{" "}
              <span>{new Intl.NumberFormat().format(country.population)}</span>
            </li>
            <li>
              Region: <span>{country.region}</span>
            </li>
            <li>
              Sub Region: <span>{country.subregion}</span>
            </li>
            <li>
              Capital: <span>{country.capital}</span>
            </li>
          </ul>

          <ul>
            <li>
              Top Level Domain: <span>{country.topLevelDomain[0]}</span>
            </li>
            <li>
              Currencies: <span>{country.currencies[0].name}</span>
            </li>
            <li>
              Language:{" "}
              <span>
                {country.languages.length > 1
                  ? country.languages.map((lang) => lang.name).join(", ")
                  : country.languages[0].name}
              </span>
            </li>
          </ul>
        </div>
        <aside className={styles.border}>
          <p className={styles.borderTitle}>Border Countries:</p>
          <div className={styles.borders}>
            {country.borders
              ? country.borders.map((c) => (
                  <Link to={`/${c}`} key={c} className={styles.linkBtn}>
                    {c}
                  </Link>
                ))
              : ""}
          </div>
        </aside>
      </article>
    </section>
  );
}
