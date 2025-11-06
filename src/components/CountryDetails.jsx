import { useParams, Link } from "react-router-dom";
import styles from "./CountryDetails.module.css";

export default function CountryDetails({ countries, isLoading }) {
  const { countryCode } = useParams();

  if (isLoading || !countries) {
    return <CountryDetailsSkeleton />;
  }

  const country = countries?.find((c) => c.alpha3Code === countryCode);

  if (!country) {
    return <CountryDetailsSkeleton />;
  }

  const countryMap = {};
  countries?.forEach((c) => {
    countryMap[c.alpha3Code] = c.name;
  });

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
                    {countryMap[c]}
                  </Link>
                ))
              : ""}
          </div>
        </aside>
      </article>
    </section>
  );
}

function CountryDetailsSkeleton() {
  return (
    <section className={styles.container}>
      <figure className={styles.imgContainer}>
        <div className={styles.skeletonImg}></div>
      </figure>

      <article className={styles.countryDetails}>
        <div className={styles.skeletonTitle}></div>

        <div className={styles.skeletonDetail}>
          <ul>
            <li className={styles.skeletonText}></li>
            <li className={styles.skeletonText}></li>
            <li className={styles.skeletonText}></li>
            <li className={styles.skeletonText}></li>
            <li className={styles.skeletonText}></li>
          </ul>

          <ul>
            <li className={styles.skeletonText}></li>
            <li className={styles.skeletonText}></li>
            <li className={styles.skeletonText}></li>
          </ul>
        </div>

        <aside className={styles.border}>
          <p className={styles.skeletonPill}></p>
          <div className={styles.borders}>
            <div className={styles.skeletonPill}></div>
            <div className={styles.skeletonPill}></div>
            <div className={styles.skeletonPill}></div>
            <div className={styles.skeletonPill}></div>
          </div>
        </aside>
      </article>
    </section>
  );
}
