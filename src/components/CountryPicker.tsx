import React, { FC, useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../api';
import { IFetchedCountries } from '../types';

interface IProps {
  handleCountryChange: any;
}

export const CountryPicker: FC<IProps> = (props) => {
  const [fetchedCountries, setFetchedCountries] = useState<
    IFetchedCountries | any
  >();

  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchCountriesAPI();
  }, [setFetchedCountries]);
  console.log('render', fetchedCountries);
  return (
    <FormControl>
      <NativeSelect
        defaultValue=''
        onChange={(e) => props.handleCountryChange(e.target.value)}>
        <option value='global'>Global</option>
        {fetchedCountries?.map((country: string, index: number) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
