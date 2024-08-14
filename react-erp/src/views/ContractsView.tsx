import DREList from '../components/lists/DREList'
import ContractsTable from '../containers/ContractsTable'


export default function ContractsView() {
  return (
    <section className='views'>

      <ContractsTable/>
      
      <DREList />
      
    </section>
  )
}
