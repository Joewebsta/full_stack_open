import React from 'react';
import { useState, useEffect } from 'react'
import CountryDetail from './Components/CountryDetail'

const App = () => {
  const [countryQuery, setCountryQuery] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (allCountries.length === 0) {
      fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(allCountries => setAllCountries(processCountries(allCountries)))
      return
    }

    setCountries(allCountries.filter(country => country.name.toLowerCase().includes(countryQuery.toLowerCase())))
  }, [countryQuery])

  const handleOnChange = async e => {
    const countryQuery = e.target.value
    setCountryQuery(countryQuery)
  }

  const processCountries = countries => {
    const processedCountries = countries.map(country => {
      return {
        name: country.name.common,
        capital: country.capital,
        area: country.area,
        languages: country.languages,
        flag: country.flags.png
      }
    })

    return processedCountries.sort((a, b) => a.name > b.name ? 1 : -1)
  }

  const displayCountries = () => {
    if (countryQuery.length === 0) return
    if (countries.length === 0) return <p>No countries found</p>
    if (countries.length === 1) return <CountryDetail country={countries[0]} />
    if (countries.length > 10) return <p>Too many matches. Specify another filter</p>

    return countries.map(country => <div key={country.name}>{country.name}</div>)
  }

  return (
    <>
      <form>
        find countries: <input onChange={handleOnChange} type="text" />
      </form>
      {displayCountries()}
    </>
  )
}

export default App;
