import { formatNumber } from 'chart.js/helpers'
import React from 'react'
import SummaryCards from '../../components/SummaryCards'
import { sumsIncome, mediaSalProfs, mediaSalTAs } from '../../services/utils/StaffComparisons'

export default function StaffSummary() {
  return (
    <section className='summary-container'>
        <SummaryCards title='Salário dos profs.' value={`R$ ${formatNumber(sumsIncome.professorSum, 'pt-BR')}`} />
        <SummaryCards title='Média profs.' value={`R$ ${formatNumber(mediaSalProfs, 'pt-BR')}`} />
        <SummaryCards title='Salário dos TAs' value={`R$ ${formatNumber(sumsIncome.nonProfessorSum, 'pt-BR')}`} />
        <SummaryCards title='Média TAs' value={`R$ ${formatNumber(mediaSalTAs, 'pt-BR')}`} />
      </section>
  )
}
