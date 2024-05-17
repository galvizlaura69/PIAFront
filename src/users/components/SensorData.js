import React, { Component } from 'react';
import { Typography, FormControl, Select, MenuItem, Button } from '@mui/material';
import getDataSensorAll from '../hooks/getDataSensorAll';

class SensorData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSensorList: [],
      filterColor: 'all', // Default: Mostrar todos los colores
      page: 1,
      pageNumber: 6,
      isNextButtonDisabled: false
    };
  }

  async componentDidMount() {
    this.getList();
  }


  getList = async () => {
    try {
      const { page, pageNumber } = this.state;
      let dataSensorList = await getDataSensorAll(page, pageNumber);
      this.setState({ dataSensorList, isNextButtonDisabled: dataSensorList.length < 6 });
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

  handlePageChange = (page) => {
    this.setState({ page }, () => {
      this.getList();
    });
  };

  render() {
    const { dataSensorList, filterColor, page, isNextButtonDisabled } = this.state;

    const filteredData = filterColor === 'all'
      ? dataSensorList
      : dataSensorList.filter(data => this.getCO2Color(parseInt(data.co2Level)) === filterColor);

    return (
      <div style={{ width: '80%', margin: 'auto', padding: '16px' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#154360', textAlign: 'center', marginBottom: '25px', height: 'auto', fontSize: '40px', fontWeight: 'bold' }}>
          DATOS SENSOR
        </Typography>
        <div style={{ display: 'flex', width: '100%', margin: 'auto' }}>
          <div style={{ width: '75%', marginRight: '30px' }}>
            <Typography variant="filtro" style={{ marginBottom: '-30px', color: '#154360', fontWeight: 'bold' }}>
              Filtrar por niveles
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
              filteredData?.map((data, index) => (
                <div key={index} style={{ marginBottom: '2px', padding: '4px', borderRadius: '4px', textAlign: 'center' }}>
                  <Typography variant="subtitle1" style={{ color: this.getCO2Color(parseInt(data.co2Level)), border: "1px solid", fontSize: '16px', fontWeight: 'bold' }}>
                    CO2: {parseInt(data.co2Level).toFixed(0)} PPM / fecha {data.createdAt.slice(0, 10)} / hora: {data.createdAt.slice(11, 19)}
                  </Typography>
                </div>
              ))
            ) : (
              <Typography variant="subtitle1" style={{ textAlign: 'center', color: 'gray', marginTop: '20px' }}>
                No hay registros de datos para este nivel.
              </Typography>
            )}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button
                variant="contained"
                disabled={page === 1}
                onClick={() => this.handlePageChange(page - 1)}
                sx={{ textTransform: 'none', Width: '120px', justifyContent: 'center', borderRadius: 20, margin: '0 5px' }}

              >
                Anterior
              </Button>
              <Button
                variant="contained"
                disabled={isNextButtonDisabled}
                onClick={() => this.handlePageChange(page + 1)}
                sx={{ textTransform: 'none', Width: '120px', justifyContent: 'center', borderRadius: 20, margin: '0 5px' }}

              >
                Siguiente
              </Button>
            </div>
          </div>

          <div style={{ textAlign: 'center', width: '25%', margin: 'auto', marginTop: '20px', border: '1px solid #ccc', padding: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant='subtitle2' style={{ color: '#154360', textAlign: 'center', height: 'auto', fontSize: '15px', fontWeight: 'bold' }}>
              ESCALA DE NIVELES
            </Typography>
            <img src="https://firebasestorage.googleapis.com/v0/b/galviz-react-7a488.appspot.com/o/Escala.jpg?alt=media&token=2234dcf6-e8c4-49ec-9ccf-1ee9e5265b17" alt="Escala" style={{ width: '100%', height: 'auto' }} />
            <Typography variant="subtitle1" style={{ fontSize: '12px', fontWeight: 'bold' }}>
              <span style={{ color: 'green' }}> Nivel Bajo: Menor o igual a 400 PPM</span>
              <br></br>
              <span style={{ color: 'orange' }}> Nivel Medio: Entre 401 PPM y 700 PPM</span>
              <br></br>
              <span style={{ color: 'red' }}> Nivel Alto:  Mayor a 700 PPM</span>
            </Typography>
          </div>

        </div>
      </div>
    );
  }
}

export default SensorData;
