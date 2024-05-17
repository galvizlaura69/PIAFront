import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const processData = (sensorData) => {
  const processedData = sensorData.map(data => {
    const date = new Date(data.createdAt);
    const hour = date.toLocaleString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return { hour: `${hour}`, value: data.co2Level };
  });

  return processedData;
};

const BarChartFull = ({ sensorData }) => {
  const data = processData(sensorData);

  return (
    <BarChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" />
      <YAxis domain={[0, 800]} ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartFull;
