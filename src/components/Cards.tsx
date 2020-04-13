import React, { FC } from 'react';
import { IVirusData } from '../types';

interface IProps {
  data: IVirusData | undefined
}

export const Cards: FC<IProps> = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Cards</h1>
    </div>
  );
};
