import React, { FC } from 'react';
import CountUp from 'react-countup';
import { Grid, Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { IVirusData } from '../types';

interface IProps {
  data: IVirusData | undefined | any;
}

export const Cards: FC<IProps> = ({ data }) => {
  console.log(data);
  !data ? (
    <h1>Loading</h1>
  ) : (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      <Box w='100%' h='100%' borderWidth='1px' rounded='10px' bg='#455a64'>
        <BoxTitle>Infected</BoxTitle>
        <BoxData>
          <CountUp start={0} end={data?.confirmed.value} />
        </BoxData>
        <BoxDate>REAL DATE</BoxDate>
        <BoxDef>Number of active cases of COVID-19</BoxDef>
      </Box>
      <Box w='100%' h='100%' borderWidth='1px' rounded='10px' bg='#455a64'>
        <BoxTitle>Recovered</BoxTitle>
        <BoxData>REAL DATA</BoxData>
        <BoxDate>REAL DATE</BoxDate>
        <BoxDef>Number of recoveries from COVID-19</BoxDef>
      </Box>
      <Box w='100%' h='100%' borderWidth='1px' rounded='10px' bg='#455a64'>
        <BoxTitle>Infected</BoxTitle>
        <BoxData>REAL DATA</BoxData>
        <BoxDate>REAL DATE</BoxDate>
        <BoxDef>Number of deaths from COVID-19</BoxDef>
      </Box>
    </Grid>
  );
};

const BoxTitle = styled.h1({
  textAlign: 'center',
});

const BoxData = styled.h3({
  textAlign: 'center',
});

const BoxDate = styled.h5({
  textAlign: 'center',
});

const BoxDef = styled.h5({
  textAlign: 'center',
});
