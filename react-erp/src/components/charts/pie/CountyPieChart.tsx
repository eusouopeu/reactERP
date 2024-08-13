import React from 'react'
import { fetchNotasFiscais, NotaFiscal } from '../../../services/api/FetchReceipts'
import { PieChart } from '@mui/x-charts';
import ChartCard from '../../ChartCard';


export default function CountyPieChart() {
  const [data, setData] = React.useState<NotaFiscal[]>([]);

  React.useEffect(() => {
    fetchNotasFiscais()
    .then(notas => {
      setData(notas)
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  },[])

  const finalData = data.map((nota) => ({
    value: parseFloat(nota.valor),
    name: nota.municipioFornecedor,
  })) 

  return (
    <ChartCard title='Municípios' className='h-[260px]'>

      <PieChart
        height={160}
        margin={{ right:100 }}
        series={[
          {
            data: finalData,
            innerRadius: 48,
            outerRadius: 100,
            paddingAngle: 4,
            cornerRadius: 8,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 80,
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
  )
}