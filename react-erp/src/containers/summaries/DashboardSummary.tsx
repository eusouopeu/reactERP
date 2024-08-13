import React from 'react'
import { formatNumber } from 'chart.js/helpers'
import SummaryCards from '../../components/SummaryCards'
import { ufbaData } from '../../data/ufbaData';

export default function DashSummaryContainer() {
  const gradCursos =  ufbaData.Cursos.Graduacao.EAD + ufbaData.Cursos.Graduacao.Salvador.Diurno + ufbaData.Cursos.Graduacao.Salvador.Noturno + ufbaData.Cursos.Graduacao.VitoriaDaConquista.Diurno + ufbaData.Cursos.Graduacao.VitoriaDaConquista.Noturno + ufbaData.Cursos.Graduacao.Camaçari.Diurno + ufbaData.Cursos.Graduacao.Camaçari.Noturno;
  const postGradCursos = ufbaData.Cursos.Doutorado + ufbaData.Cursos.Mestrado;
  const alunos = ufbaData.Matriculas.Graduacao.Salvador.Diurno + ufbaData.Matriculas.Graduacao.Salvador.Noturno + ufbaData.Matriculas.Graduacao.VitoriaDaConquista.Diurno + ufbaData.Matriculas.Graduacao.Camaçari.Diurno + ufbaData.Matriculas.Graduacao.EAD;
  const extensao = ufbaData.Extensao.Programas + ufbaData.Extensao.Projetos + ufbaData.Extensao['Cursos e minicursos'] + ufbaData.Extensao['ACCS'] + ufbaData.Extensao.Outros + ufbaData.Extensao['Prestação de serviços'];

  return (
    <section className='summary-container'>
      <SummaryCards title='Receita' value='R$ 2.007.885.471,13' />
      <SummaryCards title='Graduação' value={formatNumber(gradCursos, 'pt-BR')} />
      <SummaryCards title='Pós-Graduação' value={formatNumber(postGradCursos, 'pt-BR')} />
      <SummaryCards title='Extensão' value={formatNumber(extensao, 'pt-BR')} />
      <SummaryCards title='Alunos' value={formatNumber(alunos, 'pt-BR')} />
    </section>
  )
}
