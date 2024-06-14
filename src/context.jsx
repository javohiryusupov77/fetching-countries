import React, { createContext, useState, useEffect } from 'react';

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  );
};
