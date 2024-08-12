import React from 'react'
import SummaryCards from '../components/SummaryCards'
import { mediaSalProfs, mediaSalTAs, sumsIncome } from '../services/utils/StaffComparisons'
import { formatNumber } from 'chart.js/helpers'
import { StaffDataTable } from '../components/tables/StaffDataTable'

export default function StaffView() {
  return (
    <section className='flex flex-col justify-start items-start content-start w-full md:w-[calc(100vw-300px)] h-fit h-[calc(100vh-20px)] md:pl-[100px]'>

      <div className='flex flex-col w-[100%] md:h-[75%]'>
        <StaffDataTable/>
      </div>

      <section className='fixed bottom-[20px] flex flex-col md:flex-row flex-wrap md:justify-between w-full gap-[10px]'>
        <SummaryCards title='Salário dos profs.' value={`R$ ${formatNumber(sumsIncome.professorSum, 'pt-BR')}`} />
        <SummaryCards title='Média profs.' value={`R$ ${formatNumber(mediaSalProfs, 'pt-BR')}`} />
        <SummaryCards title='Salário dos TAs' value={`R$ ${formatNumber(sumsIncome.nonProfessorSum, 'pt-BR')}`} />
        <SummaryCards title='Média TAs' value={`R$ ${formatNumber(mediaSalTAs, 'pt-BR')}`} />
      </section>
      
    </section>
  )
}
