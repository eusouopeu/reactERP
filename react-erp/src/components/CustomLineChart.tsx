import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const grad = [
  { name: '2006', value: 22665 },
  { name: '2008', value: 24367 },
  { name: '2010', value: 28562 },
  { name: '2012', value: 32241 },
  { name: '2014', value: 33767 },
  { name: '2015', value: 33798 },
];

const MyLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart
        data={grad}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorValue" x1="1" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#1994ff" stopOpacity={0.5}/>
            <stop offset="95%" stopColor="#02e451" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#1994ff" fillOpacity={1} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default MyLineChart;
