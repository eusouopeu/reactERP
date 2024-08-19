
import { PieChart } from '@mui/x-charts/PieChart';
import ChartCard from '../../ChartCard';
import { PieChartFilled } from '@ant-design/icons';

const matriculas = {
  "Diurno": 32280,
  "Noturno": 14507,
  "EAD": 1528,
}
  

const TurnoAlunosPieChart = () => {
  const data = Object.entries(matriculas).map(([name, value]) => ({
    value,
    name: name || 'Sem nome', // Handle empty names
  }));

  // Define colors for the pie chart segments
  const colors = [
    '#581845',
    '#ff5733',
    '#DAa706',
  ];

  return (
    <ChartCard title='Bolsas de Graduação' className='flex flex-col justify-between md:w-full h-[320px] gap-2'>
      
      <div className='flex flex-row items-start content-start justify-start justify-items-start gap-0'>

          <div className='legend flex flex-col items-start w-fit gap-4'>

            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#581845]'/>
              <p>Diurno</p>
            </div>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#ff5733]'/>
              <p>Noturno</p>
            </div>
            <div className='flex gap-1'>
              <PieChartFilled className='text-xl text-[#DAa706]'/>
              <p>EAD</p>
            </div>
          
          </div>
      <PieChart
        className='self-start h-full p-[0px] m-[0xp]'
        width={300}
        height={400}
        sx={{ display: 'flex', margin: '0px', alignContent: 'start', justifyContent: 'start', justifyItems: 'start', alignItems: 'start' }}
        colors={colors}
        
        series={[
          {
            data: data,
            innerRadius: 48,
            outerRadius: 80,
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
    </div>

        

    </ChartCard>
  );
};

export default TurnoAlunosPieChart;
