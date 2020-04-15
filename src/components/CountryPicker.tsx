import React, { FC, useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styled from '@emotion/styled';

import { fetchCountries } from '../api';
import { IFetchedCountries } from '../types';

interface IProps {
  handleCountryChange: (country: string) => void;
}

export const CountryPicker: FC<IProps> = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState<IFetchedCountries>(
    [],
  );

  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchCountriesAPI();
  }, [setFetchedCountries]);

  return (
    <FormControlStyled>
      <NativeSelectStyled
        defaultValue=''
        onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=''>Global</option>
        {fetchedCountries?.map((country: string, index: number) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelectStyled>
    </FormControlStyled>
  );
};

const FormControlStyled = styled(FormControl)`
  width: 30%;
  margin: 30px;
  background-color: white;
  border-radius: 10px;
  border: none;
`;

const NativeSelectStyled = styled(NativeSelect)`
  padding: 1%;
  option {
    padding: 1%;
  }
`;
