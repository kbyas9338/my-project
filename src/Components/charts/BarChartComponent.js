import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { addLabels, balanceSheet } from './netflixsBalanceSheet';

export default function BarChartComponent() {
  return (
    <BarChart
      dataset={balanceSheet}
      series={addLabels([
        { dataKey: 'currAss', stack: 'assets' },
        { dataKey: 'nCurrAss', stack: 'assets' },
        { dataKey: 'curLia', stack: 'liability' },
        { dataKey: 'nCurLia', stack: 'liability' },
        { dataKey: 'capStock', stack: 'equity' },
        { dataKey: 'retEarn', stack: 'equity' },
        { dataKey: 'treas', stack: 'equity' },
      ])}
      xAxis={[{ dataKey: 'year' }]}
      yAxis={[{ width: 80 }]}
      {...config}
    />
  );
}

const config = {
  height: 350,
  margin: { left: 40 },
  hideLegend: true,
};