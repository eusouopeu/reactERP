import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import ChartCard from '../../ChartCard';

const bolsasGraduacao = {
  "Programa de Educação Tutorial (PET)": 254,
  "Monitoria": 460,
  "PIBID": 383,
  "Residência Pedagógica (PRP)": 537,
  "PIBIC¹": 2391,
  "PIBITI": 147,
  "": 355,
  "Estágio não obrigatório²": 161,
};

const BolsasPieChart = () => {
  const data = Object.entries(bolsasGraduacao).map(([name, value]) => ({
    value,
    name: name || 'Sem nome', // Handle empty names
  }));

  // Define colors for the pie chart segments
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#C70039', '#900C3F', '#581845', '#DAa706'];

  return (
    <ChartCard title='Bolsas de Graduação' className=' md:w-[530px] max-h-[390px]'>

      <PieChart
        width={400}
        height={300}
        margin={{ right:100 }}
        colors={colors}
        series={[
          {
            data: data,
            innerRadius: 48,
            outerRadius: 100,
            paddingAngle: 4,
            cornerRadius: 8,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -20, color: 'green' },
          }
        ]}
        slotProps={{
          legend: {
            direction: 'column',
            position: { vertical: 'middle', horizontal: 'right' },
            padding: 0,
          },
        }}
        />

    </ChartCard>
  );
};

export default BolsasPieChart;
