import React from 'react'
import SummaryCards from '../components/SummaryCards'
import ChartCard from '../components/ChartCard'
import CustomLineChart from '../components/CustomLineChart'
import GradPieChart from '../components/GradPieChart'
import { ufbaData } from '../data/ufbaData'
import { formatNumber } from 'chart.js/helpers'
import FormDocentesChart from '../components/formDocentesChart'
import AreaTerceirizadosChart from '../components/AreaTerceirizadosChart'

export default function DashboardView() {
  const gradCursos =  ufbaData.Cursos.Graduacao.EAD + ufbaData.Cursos.Graduacao.Salvador.Diurno + ufbaData.Cursos.Graduacao.Salvador.Noturno + ufbaData.Cursos.Graduacao.VitoriaDaConquista.Diurno + ufbaData.Cursos.Graduacao.VitoriaDaConquista.Noturno + ufbaData.Cursos.Graduacao.Camaçari.Diurno + ufbaData.Cursos.Graduacao.Camaçari.Noturno;
  const postGradCursos = ufbaData.Cursos.Doutorado + ufbaData.Cursos.Mestrado;
  const alunos = ufbaData.Matriculas.Graduacao.Salvador.Diurno + ufbaData.Matriculas.Graduacao.Salvador.Noturno + ufbaData.Matriculas.Graduacao.VitoriaDaConquista.Diurno + ufbaData.Matriculas.Graduacao.Camaçari.Diurno + ufbaData.Matriculas.Graduacao.EAD;
  const extensao = ufbaData.Extensao.Programas + ufbaData.Extensao.Projetos + ufbaData.Extensao['Cursos e minicursos'] + ufbaData.Extensao['ACCS'] + ufbaData.Extensao.Outros + ufbaData.Extensao['Prestação de serviços'];

  return (
    <section className='flex flex-col justify-items-start w-full md:w-[calc(100vw-540px)] h-fit gap-[20px]'>
      <section className='flex flex-col md:flex-row flex-wrap md:justify-between w-full gap-[20px]'>
        <SummaryCards title='Receita' value='R$ 2.007.885.471,13' />
        <SummaryCards title='Graduação' value={formatNumber(gradCursos, 'pt-BR')} />
        <SummaryCards title='Pós-Graduação' value={formatNumber(postGradCursos, 'pt-BR')} />
        <SummaryCards title='Extensão' value={formatNumber(extensao, 'pt-BR')} />
        <SummaryCards title='Alunos' value={formatNumber(alunos, 'pt-BR')} />
      </section>


      <ChartCard title='Evolução matrículas (2006 a 2015)' className='p-[24px]'>
        <CustomLineChart/>
      </ChartCard>

      <section className='flex gap-[20px]'>
        <ChartCard title='Bolsas de Graduação' className='w-[530px] p-[24px] h-[390px]'>
          <GradPieChart/>
        </ChartCard>
        <div className='flex flex-col gap-[20px]'>
          <ChartCard title='Divisão dos Terceirizados' className='w-[500px] h-[185px] gap-[2px]'>
            <AreaTerceirizadosChart/>
          </ChartCard>

          <ChartCard title='Alunos por turno' className='w-[500px] h-[185px]'>
            <FormDocentesChart/>
          </ChartCard>
        </div>

      </section>


    </section>
  )
}
