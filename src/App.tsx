import React, { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { Cards, Chart, CountryPicker } from './components';
import {IVirusData} from './types'
import { fetchData } from './api';



export const App: FC = () => {
  const [virusData, setVirusData] = useState<IVirusData | undefined>();

  useEffect(() => {
    const runEffect = async () => {
      const data = await fetchData();
      setVirusData(data)
    };
    runEffect();
  }, []);

  return (
    <Container>
      <Cards data={virusData} />
      <CountryPicker />
      <Chart />
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
