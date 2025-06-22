import { useEffect, useState } from "react";
import { Country, fetchCountries } from "../API/MockApiCalls";
import CountryCard from "../components/CountryCard";
import Styles from "./styling/CountriesPageStyles.module.css";
import GoHomeButton from "../components/GoHomeButton";

//Create a simple react application that displays a list of countries and their capitals
//The list should be displayed in the Countries page
//Each country should be displayed in a seperate component
//The user should be able to filer the countries by their capitals

function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountries().then((data) => {
        const sortedData = [...data].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCountries(sortedData);
        setLoading(false);
      });
    };
    fetchData();
  }, []);

  const testCountries: Country[] = countries.map((country) => {
    return {
      name: country.name,
      capital: country.capital,
    };
  });
  console.log(testCountries);

  return (
    <>
      <div className={Styles.contentContainer}>
        <h5>Countries Page</h5>
        <input
          placeholder="Filter by Capital"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        {loading ? (
          <p>Loading Countries...</p>
        ) : countries.length === 0 ? (
          <p>No Countries found</p>
        ) : (
          countries
            .filter((country) =>
              country.capital.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((country) => (
              <CountryCard
                key={country.capital}
                countryName={country.name}
                capital={country.capital}
              />
            ))
        )}
      </div>
    </>
  );
}

export default CountriesPage;
