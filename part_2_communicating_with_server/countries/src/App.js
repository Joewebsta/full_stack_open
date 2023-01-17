import React from 'react';
import { useState, useEffect } from 'react'

const App = () => {
  const [countryQuery, setCountryQuery] = useState('')
  const [countries, setCountries] = useState([])

  const getCountries = async (countryText) => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json();
    const filteredCountries = countries
      .map(country => {
        return {
          name: country.name.common,
          capital: country.capital,
          area: country.area,
          languages: country.languages,
          flag: country.flags.png
        }
      })
      .filter(country => country.name.toLowerCase().includes(countryText.toLowerCase()))
      .sort((a, b) => a.name > b.name ? 1 : -1)

    setCountries(filteredCountries)
  }

  const displayCountries = () => {
    if (countryQuery.length === 0) return
    if (countries.length > 10) return <p>Too many matches. Specify another filter</p>

    if (countries.length === 1) {
      const country = countries[0]

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

    return (
      countries.map(country => <p key={country.name}>{country.name}</p>)
    )
  }

  const handleOnChange = async e => {
    const countryText = e.target.value
    await getCountries(countryText)
    setCountryQuery(countryText)
  }

  return (
    <>
      <form>
        find countries: <input type="text" onChange={handleOnChange} value={countryQuery} />
      </form>
      {displayCountries()}
    </>
  )
}

export default App;
