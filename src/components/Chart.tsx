import React, { FC, useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {isMobile} from 'react-device-detect'

import { fetchDailyData } from '../api';
import { IDailyData, IVirusData } from '../types';

interface IProps {
  data: IVirusData | undefined;
  country: string;
}

export const Chart: FC<IProps> = ({ data, country }) => {
  const [dailyData, setDailyData] = useState<IDailyData[]>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <div style={isMobile ? { height: '400px' }: {}}>
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: isMobile ? false : true,
          legend: {
            labels: {
              fontColor: 'white',
              pointLabel: 'white',
            },
          },
          scales: {
            pointLabel: {
              fontColor: 'white',
            },
            yAxes: [
              {
                ticks: {
                  fontColor: 'white',
                  autoSkip: 'true',
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
                  autoSkip: 'true',
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
    </div>
  ) : null;

  const barChart = data?.confirmed?.value ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['yellow', 'green', 'red'],
            data: [
              data?.confirmed?.value,
              data?.recovered?.value,
              data?.deaths?.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        scales: {
          pointLabel: {
            fontColor: 'white',
          },
          yAxes: [
            {
              ticks: {
                fontColor: 'white',
                autoSkip: 'true',
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
                autoSkip: 'true',
              },
              gridLines: {
                color: 'silver',
              },
            },
          ],
        },
        title: {
          display: true,
          text: `Current state in ${country}`,
          fontColor: 'white',
        },
      }}
    />
  ) : null;

  return <div>{country ? barChart : lineChart}</div>;
};
