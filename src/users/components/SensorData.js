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
      let dataSensorList = await getDataSensorAll();

      // Agregar datos simulados para niveles contaminados y peligrosos
      const contaminatedData = { co2Level: 600 }; // Contaminado
      const dangerousData = { co2Level: 1100 }; // Peligroso
      dataSensorList = [contaminatedData, dangerousData, ...dataSensorList];

      this.setState({ dataSensorList });
    } catch (error) {
      console.error("Error fetching sensor data:", error);
    }
  };

  getCO2Color = (co2Level) => {
    if (co2Level <= 400) {
      return 'green';
    } else if (co2Level <= 700) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  render() {
    const { dataSensorList } = this.state;

    return (
      <div style={{ width: '50%', margin: 'auto', padding: '16px' }}>
        <Typography variant="h5" gutterBottom style={{color: '#154360', textAlign: 'center', marginBottom: '15px', height: 'auto', fontSize: '40px', fontWeight: 'bold'}}>
          DATOS SENSOR
        </Typography>
        {dataSensorList.map((data, index) => (
          <div key={index} style={{marginBottom: '2px', padding: '4px', borderRadius: '4px', textAlign: 'center' }}>
            <Typography variant="subtitle1" style={{ color: this.getCO2Color(parseInt(data.co2Level)), border:"1px solid", fontSize: '16px', fontWeight: 'bold' }}>
              CO2: {parseInt(data.co2Level).toFixed(0)} PPM
            </Typography>
          </div>
        ))}
      </div>
    );
  }
}

export default SensorData;
