import React from 'react'
import ContractsList from '../components/lists/ContractsList'
import DREList from '../components/lists/DREList'


export default function ContractsView() {
  return (
    <section className='views'>

      <ContractsList/>
      
      <DREList />
      
    </section>
  )
}
