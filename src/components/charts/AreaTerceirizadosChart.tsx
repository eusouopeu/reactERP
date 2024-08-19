// import * as React from 'react';
// import { BarChart, BarChartProps } from '@mui/x-charts/BarChart';
// import { axisClasses } from '@mui/x-charts/ChartsAxis';
// import ChartCard from '../ChartCard';

// export default function BorderRadius() {
//   const [layout, setLayout] = React.useState<'horizontal' | 'vertical'>('vertical');
//   const [radius, setRadius] = React.useState(10);

//   return (
//     <ChartCard title='Pós-graduação' className='md:w-full h-[250px] gap-0'>

//       {/* <BarChart
//         xAxis={[{ scaleType: 'band', data: ['Mest. Acad.', 'Mest. Prof.', 'Doutorado'] }]}
//         series={419, 848, 3791}
//         width={500}
//         height={200}
//         barLabel="value"
//         borderRadius={30}
//         colors={['#36A27B', '#FF6384', '#FFCE56']}
//         className='rounded-xl'
//       /> */}
//     </ChartCard>
//   );
// }

// const dataset = [
//   [3419, 0, 'Mest. Acad.'],
//   [848, 0, 'Mest. Prof.'],
//   [3.791, 0, 'Doutorado'],
//   [9, 6, 'Fourth'],
// ].map(([high, low, order]) => ({
//   high,
//   low,
//   order,
// }));
// const chartSettingsH: Partial<BarChartProps> = {
//   dataset,
//   height: 300,
//   yAxis: [{ scaleType: 'band', dataKey: 'order' }],
//   sx: {
//     [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
//       transform: 'translateX(-10px)',
//     },
//   },
//   slotProps: {
//     legend: {
//       direction: 'row',
//       position: { vertical: 'bottom', horizontal: 'middle' },
//       padding: -5,
//     },
//   },
// };
// const chartSettingsV: Partial<BarChartProps> = {
//   ...chartSettingsH,
//   xAxis: [{ scaleType: 'band', dataKey: 'order' }],
//   yAxis: undefined,
// };

// const colors = [
//   '#36A27B',
//   '#FF6384',
//   '#FFCE56',
//   '#FF5733',
//   '#C70039',
//   '#900C3F',
//   '#581845',
//   '#DAa706',
// ];