import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const processData = (sensorData) => {
  const processedData = sensorData.map(data => {
    const date = new Date(data.createdAt);
    const hour = date.toLocaleString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return { hour: `${hour}`, value: data.co2Level };
  });

  return processedData;
};




const LineChartFull = ({ sensorData }) => {
  const data = processData(sensorData);

  console.log(data,"a")

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" />
      <YAxis domain={[0, 800]} ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="blue" />
    </LineChart>
  );
};

export default LineChartFull;
