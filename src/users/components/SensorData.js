import React, { Component } from 'react';
import { Typography } from '@mui/material';

class SensorData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSensorList: [],
    };
  }

  async componentDidMount() {
    const dataSensorList = await this.fetchSensorData();
    this.setState({ dataSensorList });
  }

  fetchSensorData = async () => {
    return [
      { id: 1, CO2: 350, date: '2024-04-10T10:00:00' },
      { id: 2, CO2: 400, date: '2024-04-10T11:00:00' },
      { id: 3, CO2: 380, date: '2024-04-10T12:00:00' },
    ];
  };

  render() {
    const { dataSensorList } = this.state;

    return (
      <div style={{ width: '100%', padding: '16px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Datos del Sensor:
        </Typography>
        {dataSensorList.map((data, index) => (
          <div key={index}>
            <Typography variant="subtitle1">CO2: {data.CO2} Fecha: {data.date} </Typography>
          </div>
        ))}
      </div>
    );
  }
}

export default SensorData;
