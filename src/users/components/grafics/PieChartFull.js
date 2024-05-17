import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const processData = (sensorData) => {
  const processedData = sensorData.map(data => {
    const date = new Date(data.createdAt);
    const hour = date.toLocaleString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return { hour: `${hour}`, value: data.co2Level };
  });

  return processedData;
};

const PieChartFull = ({ sensorData }) => {
  const data = processData(sensorData);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Colores para las secciones de la torta

  return (
    <PieChart width={800} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="hour"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))
        }
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartFull;
