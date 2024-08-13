import React from 'react'
import TransactionsDataTable from '../components/tables/TransactionsDataTable'
import TransactionsSummaryContainer from '../containers/TransactionsSummaryContainer'

export default function TransactionsView() {
  


  return (
    <section className='views'>

      <TransactionsDataTable/>

      <TransactionsSummaryContainer/>
      
    </section>
  )
}
