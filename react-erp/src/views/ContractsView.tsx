import React from 'react'
import ContractsList from '../components/ContractsList'
import DRE from '../components/DRE'


export default function ContractsView() {
  return (
    <section className='flex w-full md:w-[calc(100vw-540px)] h-fit pb-[60px]'>

      <div className='flex flex-col'>
        <ContractsList/>
      </div>

      <div>
        <DRE />
      </div>

      
      
    </section>
  )
}
