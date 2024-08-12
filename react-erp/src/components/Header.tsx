import React from 'react'

import ufbalogo from '../assets/ufbalogo.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


interface HeaderProps {
  children: React.ReactNode
}
export default function Header({ children }: HeaderProps) {


  return (
    <header className='
      fixed bottom-[0px] md:left-[0px] flex items-center
      h-[80px] md:h-screen w-full md:w-[280px] p-[20px]
    '>
      <section className='flex items-center md:items-start
      h-[50px] w-full md:p-[32px] gap-[32px] 
      md:flex-col h-full 
      bg-gradient-to-bl from-white md:from-slate-200/50 to-slate-300 md:to-slate-400/50 backdrop-blur-lg rounded-xl'>

        <div className='hidden md:flex w-full py-1 px-2 bg-gradient-to-b from-white to-slate-100 rounded-full'>
          <MagnifyingGlassIcon className='text-slate-400 size-6' />
          <input className='flex w-4/5' />
        </div>
        
        {children}

        {/* <nav className='flex w-full md:w-[100px]'>
          <ul className='flex justify-around md:flex-col items-start w-full gap-4'>
            <li><a href="/" className='flex gap-2 text-xl text-slate-800 font-bold'>
              <HomeIcon className='size-6' />
              <p className='hidden md:flex'>Dashboards</p>
              </a></li>
            <li><a href="/" className='flex gap-2 text-xl text-slate-800 font-bold'>
              <CurrencyDollarIcon className='size-6' />
              <p className='hidden md:flex'>Fornecedores</p>
              </a></li>
            <li><a href="/" className='flex gap-2 text-xl text-slate-800 font-bold'>
              <UsersIcon className='size-6' />
              <p className='hidden md:flex'>Funcionários</p>
              </a></li>
              </ul>
        </nav> */}
        
        <img src={ufbalogo} alt="logo da UFBA" className='hidden md:block absolute bottom-0 left-0' />
      </section>
    </header>
  )
}
