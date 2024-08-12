import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ufbaData } from '../../data/ufbaData';

  const diurno = ufbaData.Matriculas.Graduacao.Salvador['Diurno'] + ufbaData.Matriculas.Graduacao.VitoriaDaConquista['Diurno'] + ufbaData.Matriculas.Graduacao['Camaçari']['Diurno'];

const data = [
  { name: 'Diurno', Permanent: diurno },
  { name: 'Noturno', Permanent: ufbaData.Matriculas.Graduacao.Salvador['Noturno'] },
  { name: 'EAD', Permanent: ufbaData.Matriculas.Graduacao['EAD'] },
];

const FormDocentesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={140}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Permanent" fill="#3884d8" className='bg-gradient-to-b from-blue-200 to-blue-500' />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default FormDocentesChart;
