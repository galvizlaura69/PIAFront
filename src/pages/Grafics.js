import React, { Component } from "react";
import LineChartFull from "../users/components/grafics/LineChartFull";
import getDataSensorFull from "../users/hooks/getDataSensorFull";
import { Box, Button, Input, Typography } from "@mui/material";
import BarChartFull from "../users/components/grafics/BarChartFull";
import PieChartFull from "../users/components/grafics/PieChartFull";
import ScatterChartFull from "../users/components/grafics/ScatterChartFull";

class Grafics extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const year = yesterday.getFullYear();
    const month = yesterday.getMonth() + 1; // Sumar 1 porque los meses se indexan desde 0
    const day = yesterday.getDate();

    this.state = {
      sensorData: [],
      date: `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { date } = this.state;
    try {
      const sensorData = await getDataSensorFull({ date });
      this.setState({ sensorData });
    } catch (error) {
      console.error("Error al obtener los datos del sensor:", error);
    }
  }

  handleDateChange = (event) => {
    this.setState({ date: event.target.value });
  }

  render() {
    const { sensorData } = this.state;

    return (
      <div style={{ width: '80%', margin: 'auto', padding: '16px', marginTop:'50px' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#154360', textAlign: 'center', marginBottom: '25px', height: 'auto', fontSize: '40px', fontWeight: 'bold' }}>
          Gráficas
        </Typography>
        <Typography style={{ marginBottom: '10px', color: '#154360', fontWeight: 'bold', textAlign: 'center' }}>
          Seleccione la fecha a consultar
        </Typography>
        <Typography style={{ marginBottom: '40px', color: '#154360', fontWeight: 'bold', textAlign: 'center' }}>
          <Input type="date" value={this.state.date} onChange={this.handleDateChange} />
          <Button
            variant="contained"
            onClick={this.getData}
            sx={{ textTransform: 'none', Width: '120px', justifyContent: 'center', borderRadius: 20, margin: '0 5px' }}
          >
            Obtener Datos
          </Button>
        </Typography>
        <Box style={{width:'100%', display:'flex', marginBottom:'40px'}}>
          <div style={{ width: '50%' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#154360', textAlign: 'center', marginBottom: '25px', height: 'auto', fontSize: '24px', fontWeight: 'bold' }}>
              Gráfica de Línea
            </Typography>
            <LineChartFull sensorData={sensorData} />
          </div>
          <div style={{ width: '50%' }}>
            <Typography variant="h6" gutterBottom style={{ color: '#154360', textAlign: 'center', marginBottom: '25px', height: 'auto', fontSize: '24px', fontWeight: 'bold' }}>
              Gráfica de Barras
            </Typography>
            <BarChartFull sensorData={sensorData} />
          </div>
        </Box>
        <Box style={{width:'100%', display:'flex'}}>
        <div style={{ width: '50%' }}>
          <Typography variant="h6" gutterBottom style={{ color: '#154360', textAlign: 'center', marginBottom: '25px', height: 'auto', fontSize: '24px', fontWeight: 'bold' }}>
            Gráfica de Torta
          </Typography>
          <PieChartFull sensorData={sensorData} />
        </div>
        <div style={{ width: '50%' }}>
          <Typography variant="h6" gutterBottom style={{ color: '#154360', textAlign: 'center', marginBottom: '25px', height: 'auto', fontSize: '24px', fontWeight: 'bold' }}>
            Gráfica de Dispersión
          </Typography>
          <ScatterChartFull sensorData={sensorData} />
        </div>
        </Box>
      </div>
    );
  }
}

export default Grafics;
