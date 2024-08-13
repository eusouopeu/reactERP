import React from 'react'
import AreaTerceirizadosChart from '../components/charts/AreaTerceirizadosChart'
import FormDocentesChart from '../components/charts/formDocentesChart'
import GradPieChart from '../components/charts/pie/GradPieChart'

export default function DashChartsContainer() {
  return (
    <section className='charts-container'>

{/* <ChartCard title='Evolução matrículas (2006 a 2015)' className='p-[24px]'>
        <CustomLineChart/>
      </ChartCard> */}
        
          <GradPieChart/>
        <div className='flex flex-col gap-[20px]'>
          
            <AreaTerceirizadosChart/>

          
            <FormDocentesChart/>
        </div>

      </section>
  )
}
