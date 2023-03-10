import React from "react"

const CountryDetail = ({ country }) => {
  if (country.isVisible) {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <h3>languages</h3>
        <ul>
          {Object.values(country.languages).map((lang) => <li key={lang}>{lang}</li>)}
        </ul>
        <img src={country.flag} alt="" />
      </div>
    )
  }
}

export default CountryDetail