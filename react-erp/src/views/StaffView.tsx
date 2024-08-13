import { StaffDataTable } from '../components/tables/StaffDataTable'
import StaffSummary from '../containers/summaries/StaffSummary'

export default function StaffView() {
  return (
    <section className='views'>

      <div className='flex flex-col w-[100%] md:h-[75%]'>
        <StaffDataTable/>
      </div>

      <StaffSummary/>
      
    </section>
  )
}
