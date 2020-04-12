import React, { FC } from 'react';
import styled from '@emotion/styled';

import {Cards, Chart, CountryPicker} from './components'

export const App: FC = () => {
  return (
    <Container>
      <Cards />
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
