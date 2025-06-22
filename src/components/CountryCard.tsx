import React from "react";
import Styles from "./styling/CountryCardStyles.module.css";

type CountryCardProps = {
  countryName: string;
  capital: string;
};

function CountryCard({ countryName, capital }: CountryCardProps) {
  return (
    <div className={Styles.cardContainer}>
      <h5 className={Styles.textContainer}>{countryName}</h5>
      <p className={Styles.textContainer}>Capital: {capital}</p>
    </div>
  );
}

export default CountryCard;
