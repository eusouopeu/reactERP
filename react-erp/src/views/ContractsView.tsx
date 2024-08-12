import React from 'react'
import ContractsList from '../components/lists/ContractsList'
import DRE from '../components/lists/DRE'


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
