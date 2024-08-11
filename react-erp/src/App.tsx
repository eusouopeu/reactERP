import Header from './components/Header'
import './App.css'
import SummaryCards from './components/SummaryCards'
import ChartCard from './components/ChartCard'
import CustomLineChart from './components/CustomLineChart'
import EnhancedTable from './components/StaffDataTable'


function App() {
  

  return (
    <>
      <Header/>
    <section className='w-screen h-fit flex justify-items-start md:pb-[80px] px-[20px] md:pl-[280px]'>
      
      
      <main className='flex flex-col w-full p-[16px] gap-[16px]'>
        <section className='flex flex-col md:flex-row flex-wrap md:justify-between w-full gap-[20px]'>
          <SummaryCards title='Receitas' value='R$ 2.000.000,00'/>
          <SummaryCards title='Custos' value='RS1.500.000,00'/>
          <SummaryCards title='GAO' value='0,6'/>
          <SummaryCards title='GAF' value='0,8'/>
        </section>
  <EnhancedTable/>
<ChartCard title='Line Chart'>


        <CustomLineChart/>
</ChartCard>
      </main>
    </section>
    </>
  )
}

export default App
