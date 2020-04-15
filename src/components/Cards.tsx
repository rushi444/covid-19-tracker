import React, { FC } from 'react';
import CountUp from 'react-countup';
import { Grid, Box, Spinner } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { IVirusData } from '../types';

interface IProps {
  data: IVirusData | undefined;
}

export const Cards: FC<IProps> = ({ data }) => {
  return !data ? (
    <Grid templateColumns='repeat(1, 1fr)'>
      <Spinner />
    </Grid>
  ) : (
    <div style={{ marginBottom: '30px' }}>
      <LastUpdateDate>
        Last Updated: {new Date(data?.lastUpdate).toDateString()}
      </LastUpdateDate>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <Box
          w='100%'
          h='100%'
          borderWidth='1px'
          rounded='10px'
          bg='#455a64'
          style={{ borderBottom: '3px solid yellow' }}>
          <BoxTitle>Infected</BoxTitle>
          <BoxData>
            <CountUp
              start={0}
              end={data?.confirmed.value || 0}
              duration={2.5}
              separator=','
            />
          </BoxData>
          <BoxDef>Number of active cases of COVID-19</BoxDef>
        </Box>
        <Box
          w='100%'
          h='100%'
          borderWidth='1px'
          rounded='10px'
          bg='#455a64'
          style={{ borderBottom: '3px solid green' }}>
          <BoxTitle>Recovered</BoxTitle>
          <BoxData>
            <CountUp
              start={0}
              end={data?.recovered.value || 0}
              duration={2.5}
              separator=','
            />
          </BoxData>
          <BoxDef>Number of recoveries from COVID-19</BoxDef>
        </Box>
        <Box
          w='100%'
          h='100%'
          borderWidth='1px'
          rounded='10px'
          bg='#455a64'
          style={{ borderBottom: '3px solid red' }}>
          <BoxTitle>Deaths</BoxTitle>
          <BoxData>
            <CountUp
              start={0}
              end={data?.deaths.value || 0}
              duration={2.5}
              separator=','
            />
          </BoxData>
          <BoxDef>Number of fatalities from COVID-19</BoxDef>
        </Box>
      </Grid>
    </div>
  );
};

const BoxTitle = styled.h1`
  text-align: center;
`;

const BoxData = styled.h2`
  text-align: center;
`;

const LastUpdateDate = styled.h2`
  text-align: center;
`;

const BoxDef = styled.h4`
  text-align: center;
`;
