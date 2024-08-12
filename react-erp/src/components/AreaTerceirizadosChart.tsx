import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import  {ufbaData} from '../data/ufbaData';

const data = [
  { name: 'Serv. Admin.', Permanent: ufbaData.Pessoal.Terceirizados['Serviços administrativos continuados'] },
  { name: 'Manut.', Permanent: ufbaData.Pessoal.Terceirizados['Manutenção predial e conservação de áreas verdes'] },
  { name: 'Serv. Saúde', Permanent: ufbaData.Pessoal.Terceirizados['Serviços de saúde²'] },
  { name: 'Serv. T.I.', Permanent: ufbaData.Pessoal.Terceirizados['Serviços de tecnologia de informação'] },
];

const AreaTerceirizadosChart = () => {
  return (
    <ResponsiveContainer width="100%" height={130}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Permanent" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AreaTerceirizadosChart;
