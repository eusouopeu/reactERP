import React from 'react'
import TransactionsDataTable from '../components/tables/TransactionsDataTable'
import SummaryCards from '../components/SummaryCards'
import { maiorGasto, mediaGastos, totalGastos, municipioModa } from '../services/utils/TransactionsComparison'
import { formatNumber } from 'chart.js/helpers'

export default function TransactionsView() {
  const municipio = municipioModa?.municipio != undefined ? municipioModa.municipio : 'Não informado'
  const maiorValor = maiorGasto?.valor != undefined ? maiorGasto.valor : 0

  return (
    <section className='flex flex-col content-start pb-[60px]'>

      <div className='flex flex-col h-[420px]'>
        <TransactionsDataTable/>
      </div>

      <section className='fixed bottom-[20px] flex flex-col md:flex-row flex-wrap md:justify-between w-[100vw-20px] gap-[20px]'>
        <SummaryCards title='Total gastos' value={`R$ ${formatNumber(totalGastos, 'pt-BR')}`} />
        <SummaryCards title='Média gastos' value={`R$ ${formatNumber(mediaGastos, 'pt-BR')}`} />
        <SummaryCards title='Maior gasto' value={`R$ ${formatNumber(maiorValor, 'pt-BR')}`} />
        <SummaryCards title='Município mais comum' value={municipio} />
      </section>
      
    </section>
  )
}
