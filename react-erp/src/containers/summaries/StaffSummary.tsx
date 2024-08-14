import { formatNumber } from 'chart.js/helpers'

import SummaryCards from '../../components/SummaryCards'
import { mediaSalProfs, mediaSalTAs } from '../../services/utils/StaffComparisons'


export default function StaffSummary() {
  return (
    <section className='summary-container'>
        <SummaryCards title='Média profs.' value={`R$ ${formatNumber(mediaSalProfs, 'pt-BR')}`} />
        <SummaryCards title='Média TAs' value={`R$ ${formatNumber(mediaSalTAs, 'pt-BR')}`} />
      </section>
  )
}
