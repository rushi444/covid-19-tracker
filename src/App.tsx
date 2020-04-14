import React, { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { Cards, Chart, CountryPicker } from './components';
import { IVirusData } from './types';
import { fetchData } from './api';

export const App: FC = () => {
  const [virusData, setVirusData] = useState<IVirusData | undefined>();
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    const runEffect = async () => {
      const data = await fetchData();
      setVirusData(data);
    };
    runEffect();
  }, []);

  const handleCountryChange = async (country: string) => {
    console.log(country);
    const fetchedData = await fetchData(country);
    setCountry(country);
    setVirusData(fetchedData);
  };

  return (
    <Container>
      <Cards data={virusData} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={virusData} country={country} />
    </Container>
  );
};

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
  marginTop: '5%',
  // display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
