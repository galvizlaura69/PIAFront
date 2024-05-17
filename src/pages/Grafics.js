import React, { Component } from "react";
import LineChartFull from "../users/components/grafics/LineChartFull";
import getDataSensorFull from "../users/hooks/getDataSensorFull";
import { Box, Button, Input, Typography } from "@mui/material";

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
      date: `${year}${month < 10 ? '0' + month : month}${day < 10 ? '0' + day : day}`
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
      <div style={{ width: '80%', margin: 'auto', padding: '16px' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#154360', textAlign: 'center', marginBottom: '25px', height: 'auto', fontSize: '40px', fontWeight: 'bold' }}>
        Gráficas
        </Typography>
        <Typography  style={{ marginBottom: '30px', color: '#154360', fontWeight: 'bold' }}>
          Seleccione la fecha a consultar
        </Typography>
        <Box style={{marginBottom:'20px'}}>
          <Input type="date" value={this.state.date} onChange={this.handleDateChange} />
          <Button
            variant="contained"
            onClick={this.getData}
            sx={{ textTransform: 'none', Width: '120px', justifyContent: 'center', borderRadius: 20, margin: '0 5px' }}
          >
            Obtener Datos
          </Button>
        </Box>
        <LineChartFull sensorData={sensorData} />
      </div>
    );
  }
}

export default Grafics;
