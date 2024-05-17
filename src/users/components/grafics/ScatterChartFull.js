import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const processData = (sensorData) => {
  const processedData = sensorData.map(data => {
    const date = new Date(data.createdAt);
    const hour = date.toLocaleString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return { hour: `${hour}`, value: data.co2Level };
  });

  return processedData;
};

const ScatterChartFull = ({ sensorData }) => {
  const data = processData(sensorData);

  return (
    <ScatterChart width={500} height={300}>
      <CartesianGrid />
      <XAxis dataKey="hour" name="Hour" />
      <YAxis dataKey="value" name="CO2 Level" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name="CO2 Level" data={data} fill="#8884d8" />
    </ScatterChart>
  );
};

export default ScatterChartFull;
