import React from "react"
import CountryDetail from "./CountryDetail";

const CountryList = ({ countries, setCountries }) => {
  return (countries.map(country => (
    <div key={country.name}>
      {country.name}
      <button onClick={() => setCountries(countries.map(c => c.name !== country.name ? c : { ...country, isVisible: !country.isVisible }))} >
        {country.isVisible ? 'hide' : 'show'}
      </button>
      {<CountryDetail country={country} />}
    </div >
  )))
}

export default CountryList;
