import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const bolsasGraduacao = {
  "Programa de Educação Tutorial (PET)": 254,
  "Monitoria": 460,
  "PIBID": 383,
  "Residência Pedagógica (PRP)": 537,
  "PIBIC¹": 2391,
  "PIBITI": 147,
  "": 355,
  "Estágio não obrigatório²": 161,
};

const BolsasPieChart = () => {
  // Convert the bolsas data to an array suitable for PieChart
  const data = Object.entries(bolsasGraduacao).map(([name, value]) => ({
    name: name || 'Sem nome', // Handle empty names
    value,
  }));

  // Define colors for the pie chart segments
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#C70039', '#900C3F', '#581845', '#DAa706'];

  return (
        <PieChart width={500} height={400} className='self-center *:font-bold'>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="vertical"
            align="left"
            verticalAlign="middle"
            
            wrapperStyle={{ width: '30%', height: '100%', overflow: 'auto' }}
            
          />
        </PieChart>
  );
};

export default BolsasPieChart;
