/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatNumber } from 'chart.js/helpers'
import React from 'react'
import CountyPieChart from '../components/charts/pie/CountyPieChart'
import SummaryCards from '../components/SummaryCards'
import { totalGastos, mediaGastos, maiorGasto, municipioModa } from '../services/utils/TransactionsComparison'

export default function TransactionsSummaryContainer() {
  const municipio = municipioModa?.municipio != undefined ? municipioModa.municipio : 'Não informado'
  const maiorValor = maiorGasto?.valor != undefined ? maiorGasto.valor : 0
  
  return (
    <section className='summary-container'>
        <SummaryCards title='Total gastos' value={`R$ ${formatNumber(totalGastos, 'pt-BR')}`} />
        
        <CountyPieChart/>
        <SummaryCards title='Média gastos' value={`R$ ${formatNumber(mediaGastos, 'pt-BR')}`} />
        <SummaryCards title='Maior gasto' value={`R$ ${formatNumber(maiorValor, 'pt-BR')}`} />
      </section>
  )
}
