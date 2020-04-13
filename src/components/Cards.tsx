import React, { FC } from 'react';
import { Grid, Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { IVirusData } from '../types';

interface IProps {
  data: IVirusData | undefined;
}

export const Cards: FC<IProps> = (props) => {
  console.log(props);
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      <Box w='100%' h='100%' borderWidth='1px' rounded='10px' bg='#455a64'>
        <BoxTitle>Infected</BoxTitle>
        <BoxData>REAL DATA</BoxData>
        <BoxDate>REAL DATE</BoxDate>
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
