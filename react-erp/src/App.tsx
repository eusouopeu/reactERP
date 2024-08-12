import Header from './components/Header'
import './App.css'
import { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import DashboardView from './views/DashboardView'
import StaffView from './views/StaffView'
import { BookOpenIcon, CurrencyDollarIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline'
import TransactionsView from './views/TransactionsView'
import ContractsView from './views/ContractsView'

function App() {
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  

  return (
    <>
      <Header>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          orientation='vertical' 
          className='flex'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            '& .MuiTabs-indicator': {
              backgroundColor: 'transparent', // Cor do indicador da aba ativa
            },
            '& .MuiTab-root': {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingY: 1,
              paddingX: 3,
              gap: 1,
              border: 'none',
              fontSize: '1rem',
              textTransform: 'none',
              height: 'fit-content',
              minHeight: '50px',
              width: '100%',
              fontWeight: 'bold',
              color: 'white', // Cor do texto das abas inativas
              '&.Mui-selected': {
                backgroundColor: 'lightBlue', // Cor do texto da aba ativa
                borderBlockColor: 'darkblue', // Cor da borda da aba ativa
                borderRadius: 10, // Borda arredondada da aba ativa
                border: 'none',
                padding: 0,
              },
              '&:hover': {
                color: 'darkblue', // Cor do texto quando a aba é hover
              },
            },
          }}
        >
          <Tab icon={<HomeIcon className='size-5'/>} label='Dashboards'  />
          <Tab icon={<CurrencyDollarIcon className='size-5'/>} label='Transações'  />
          <Tab icon={<BookOpenIcon className='size-5'/>} label='Contratos'  />
          <Tab icon={<UsersIcon className='size-6'/>} label='Funcionários' />
        </Tabs>
      </Header>

      <section className='flex justify-start p-[20px] pb-[80px] md:pb-[0px]'>
        {value === 0 && <DashboardView/>}
        {value === 1 && <TransactionsView/>}
        {value === 2 && <ContractsView/>}
        {value === 3 && <StaffView/>}
    </section>
    </>
  )
}

export default App;
