import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import ChartCard from '../../ChartCard';
import { PieChartFilled } from '@ant-design/icons';

const bolsasGraduacao = {
  "PIBIC¹": 2391,
  "Residência Pedagógica (PRP)": 537,
  "Monitoria": 460,
  "PIBID": 383,
  "Extensão": 355,
  "Programa de Educação Tutorial (PET)": 254,
  "Estágio não obrigatório²": 161,
  "PIBITI": 147,
};

const ProfPie = () => {
  const data = Object.entries(bolsasGraduacao).map(([name, value]) => ({
    value,
    name: name || 'Sem nome', // Handle empty names
  }));

  // Define colors for the pie chart segments
  const colors = [
    '#36A27B',
    '#FF6384',
    '#FFCE56',
    '#FF5733',
    '#C70039',
    '#900C3F',
    '#581845',
    '#DAa706',
  ];

  return (
    <ChartCard title='Bolsas de Graduação' className='flex flex-col justify-between md:w-[350px] h-[790px] gap-0'>
      <PieChart
        className='self-start h-full p-[0px] m-[0xp]'
        width={400}
        height={290}
        margin={{ right:100 }}
        colors={colors}
        
        series={[
          {
            data: data,
            innerRadius: 48,
            outerRadius: 100,
            paddingAngle: 4,
            cornerRadius: 8,
            startAngle: 0,
            endAngle: 270,
            cx: 150,
            cy: 150,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -20, color: 'green' },
          }
        ]}
        />
          <div className='legend'>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#36A27B]'/>
              <p>PIBIC¹</p>
            </div>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#ff6384]'/>
              <p>Residência Pedagógica (PRP)</p>
            </div>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#ffce56]'/>
              <p>Monitoria</p>
            </div>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#ff5733]'/>
              <p>PIBID</p>
            </div>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#C70039]'/>
              <p>Extensão</p>
            </div>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#900C3F]'/>
              <p>Estágio não obrigatório²</p>
            </div>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#581845]'/>
              <p>Programa de Educação Tutorial (PET)</p>
            </div>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#DAa706]'/>
              <p>PIBITI</p>
            </div>
            
  
          </div>

    </ChartCard>
  );
};

export default ProfPie;
