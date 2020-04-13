import React, { FC, useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../api';
import { IDailyData } from '../types';

export const Chart: FC = () => {
  const [dailyData, setDailyData] = useState<IDailyData | any>([]);

  fetchDailyData();

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  });

  const lineChart = dailyData.length ? (
    <Line
      options={{
        legend: {
          labels: {
            fontColor: 'white',
            pointLabel: 'white',
          },
        },
        // scale: {
        //   pointLabels: {
        //     fontColor: 'white',
        //   },
        // },
        scales: {
          pointLabel: {
            fontColor: 'white',
          },
          yAxes: [
            {
              ticks: {
                fontColor: 'white',
              },
              gridLines: {
                color: 'silver',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: 'white',
              },
              gridLines: {
                color: 'silver',
              },
            },
          ],
        },
      }}
      data={{
        labels: dailyData.map(({ date }: any) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }: any) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }: any) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'red',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div>{lineChart}</div>;
};
