import React, { Component } from 'react';
import { Typography, FormControl, Select, MenuItem } from '@mui/material';
import getDataSensorAll from '../hooks/getDataSensorAll';

class SensorData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSensorList: [],
      filterColor: 'all', // Default: Mostrar todos los colores
    };
  }

  async componentDidMount() {
    this.getList();
  }

  getList = async () => {
    try {
      let dataSensorList = await getDataSensorAll();
      // Simulación de datos
      // const contaminatedData = { co2Level: 600 }; // Contaminado
      // const dangerousData = { co2Level: 1100 }; // Peligroso
      // dataSensorList = [contaminatedData, dangerousData, ...dataSensorList];

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

  handleFilterChange = (event) => {
    this.setState({ filterColor: event.target.value });
  };

  render() {
    const { dataSensorList, filterColor } = this.state;

    // Filtrar datos según el color seleccionado
    const filteredData = filterColor === 'all'
      ? dataSensorList
      : dataSensorList.filter(data => this.getCO2Color(parseInt(data.co2Level)) === filterColor);

    return (
      <div style={{ width: '50%', margin: 'auto', padding: '16px' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#154360', textAlign: 'center', marginBottom: '15px', height: 'auto', fontSize: '40px', fontWeight: 'bold' }}>
          DATOS SENSOR
        </Typography>
        <Typography variant="filtro" style={{  marginBottom: '-30px', color:  '#154360', fontWeight:'bold'  }}>
          Filtro por niveles
        </Typography>
        <FormControl fullWidth style={{ marginBottom: '15px' }}>
          <Select
            labelId="color-filter-label"
            id="color-filter"
            value={filterColor}
            onChange={this.handleFilterChange}
          >
            <MenuItem value="all">Todos</MenuItem>
            <MenuItem value="green">Bajo</MenuItem>
            <MenuItem value="orange">Medio</MenuItem>
            <MenuItem value="red">Alto</MenuItem>
          </Select>
        </FormControl>
        {filteredData.length > 0 ? (
          filteredData.map((data, index) => (
            <div key={index} style={{ marginBottom: '2px', padding: '4px', borderRadius: '4px', textAlign: 'center' }}>
              <Typography variant="subtitle1" style={{ color: this.getCO2Color(parseInt(data.co2Level)), border: "1px solid", fontSize: '16px', fontWeight: 'bold' }}>
                CO2: {parseInt(data.co2Level).toFixed(0)} PPM
              </Typography>
            </div>
          ))
        ) : (
          <Typography variant="subtitle1" style={{ textAlign: 'center', color: 'gray', marginTop: '20px' }}>
            No hay registros de datos para este nivel.
          </Typography>
        )}
      </div>
    );
  }
}

export default SensorData;
