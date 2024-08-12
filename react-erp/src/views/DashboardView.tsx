import React from 'react'
import ChartCard from '../components/ChartCard'
import CustomLineChart from '../components/charts/CustomLineChart'
import GradPieChart from '../components/charts/GradPieChart'
import FormDocentesChart from '../components/charts/formDocentesChart'
import AreaTerceirizadosChart from '../components/charts/AreaTerceirizadosChart'
import DashSummaryContainer from '../containers/DashSummaryContainer'

export default function DashboardView() {
  return (
    <section className='flex flex-col justify-items-start w-full md:w-[calc(100vw-540px)] h-fit gap-[20px]'>
      
      <DashSummaryContainer/>

      


      <ChartCard title='Evolução matrículas (2006 a 2015)' className='p-[24px]'>
        <CustomLineChart/>
      </ChartCard>

      <section className='flex gap-[20px]'>
        <ChartCard title='Bolsas de Graduação' className='w-[530px] p-[24px] h-[390px]'>
          <GradPieChart/>
        </ChartCard>
        <div className='flex flex-col gap-[20px]'>
          <ChartCard title='Divisão dos Terceirizados' className='w-[500px] h-[185px] gap-[2px]'>
            <AreaTerceirizadosChart/>
          </ChartCard>

          <ChartCard title='Alunos por turno' className='w-[500px] h-[185px]'>
            <FormDocentesChart/>
          </ChartCard>
        </div>

      </section>


    </section>
  )
}
