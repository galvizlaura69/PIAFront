import React, { Component } from 'react';
import { Typography } from '@mui/material'; 
import getDataSensorAll from '../hooks/getDataSensorAll';

class SensorData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSensorList: [],
    };
  }
  async componentDidMount() {
    this.getList();
  }

  getList = async () => {
    try {
      const dataSensorList = await getDataSensorAll();
      this.setState({ dataSensorList });
    } catch (error) {
      console.error("Error fetching sensor data:", error);
    }
  };

  render() {
    const { dataSensorList } = this.state;

    return (
      <div style={{ width: '100%', padding: '16px', textAlign: 'center', height: '150px'}}>
        <Typography variant="h5" gutterBottom style={{color: '#154360', textAlign: 'center', marginBottom: '15px', height: 'auto', fontSize: '40px', fontWeight: 'bold'}}>
          DATOS SENSOR
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
