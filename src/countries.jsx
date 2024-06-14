import React, { useContext } from 'react';
import { CountriesContext } from './context';

const Countries = () => {
  const countries = useContext(CountriesContext);

  return (
    <div>
      {countries.map(country => (
        <div key={country.cca3}>
          <img src={country.flags.svg} alt={`${country.name.common} flag`} width="50%" />
          <p>{country.name.common}</p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
