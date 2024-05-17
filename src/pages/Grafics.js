import React, { Component } from "react";
import LineChartFull from "../users/components/grafics/LineChartFull";
import getDataSensorFull from "../users/hooks/getDataSensorFull";

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
      <div style={{ width: '90%', margin: 'auto', padding: '16px' }}>
        <h1>Gráficas</h1>
        <input type="date" value={this.state.date} onChange={this.handleDateChange} />
        <button onClick={this.getData}>Obtener Datos</button>
        <LineChartFull sensorData={sensorData} />
      </div>
    );
  }
}

export default Grafics;
