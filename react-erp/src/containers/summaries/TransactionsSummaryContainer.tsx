/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatNumber } from 'chart.js/helpers'

// import CountyPieChart from '../../components/charts/pie/CountyPieChart'
import SummaryCards from '../../components/SummaryCards'
import { mediaGastos, maiorGasto } from '../../services/utils/TransactionsComparison'

export default function TransactionsSummaryContainer() {
  const maiorValor = maiorGasto?.valor != undefined ? maiorGasto.valor : 0
   
  
  return (
    <section className='summary-container'>
        <SummaryCards title='Maior gasto' value={`R$ ${formatNumber(maiorValor, 'pt-BR')}`} />
        <SummaryCards title='Valor médio (transação)' value={`R$ ${formatNumber(mediaGastos, 'pt-BR')}`} />
      </section>
  )
}
