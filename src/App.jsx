import React from 'react';
import { CountriesProvider } from './context';
import Countries from './countries';

function App() {
  return (
    <CountriesProvider>
      <div className="App">
        <h1>Countries</h1>
        <Countries />
      </div>
    </CountriesProvider>
  );
}

export default App;


