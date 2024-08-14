import React from 'react'
import TripsSummary from '../containers/summaries/TripsSummary'
import TripsTable from '../containers/TripsTable'

export default function TripsView() {
  return (
    <section className='views'>

      
      <TripsTable />

      <TripsSummary />
  
    </section>
  )
}
