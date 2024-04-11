import React, { Component } from "react";
import { Typography } from '@mui/material';
import getDataSensorAll from '../users/hooks/getDataSensorAll';
import NoticesSidebar from "../users/components/NoticesSidebar";
import SensorData from "../users/components/SensorData";

class Home extends Component {
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
    const { user } = this.props;
    const { dataSensorList } = this.state;

    const noticias = [
      {
        titulo: 'Tecnología',
        imagen: 'https://img.freepik.com/foto-gratis/esfera-azul-brillante-sostenida-mano-humana-generada-ia_188544-41033.jpg',
        contenido: 'Descubre las últimas innovaciones tecnológicas que están cambiando el mundo. Desde inteligencia artificial hasta realidad aumentada, mantente al día con la vanguardia tecnológica.',
      },
    ];

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '70%', background: 'red' }}> 
          <SensorData />
        </div>
        <div style={{ width: '30%', background:"blue" }}>
          <Typography variant="h4" gutterBottom>
            Últimas noticias para ti {user.name}
          </Typography>
          <NoticesSidebar noticias={noticias} />
        </div>
      </div>
    );
  }
}

export default Home;
