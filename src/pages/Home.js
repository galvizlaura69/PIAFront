import React, { Component } from "react";
import { Typography } from '@mui/material';
import NoticesSidebar from "../users/components/NoticesSidebar";
import SensorData from "../users/components/SensorData";

class Home extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { user } = this.props;

    const noticias = [
      {
        titulo: 'Tecnología',
        imagen: 'https://img.freepik.com/vector-gratis/ilustracion-clima-ecologico_1284-34386.jpg?size=338&ext=jpg&ga=GA1.1.1488620777.1712188800&semt=ais',
        contenido: 'Descubre las últimas innovaciones tecnológicas que están cambiando el mundo. Desde inteligencia artificial hasta realidad aumentada, mantente al día con la vanguardia tecnológica.',
      },
      {
        titulo: 'Contaminación del aire de Bogotá DC',
        imagen: 'https://img.freepik.com/vector-gratis/ilustracion-guardar-mensaje-planeta_23-2148514659.jpg?size=338&ext=jpg&ga=GA1.1.539837299.1712016000&semt=ais',
        contenido: 'El monitor de calidad del aire GAIA utiliza sensores láser de partículas para medir en tiempo real la contaminación por partículas PM2,5 y PM10, que es uno de los contaminantes del aire más dañinos.',
      },
      {
        titulo: 'Cuidados y Uso de Tapabocas',
        imagen: 'https://img.freepik.com/vector-gratis/ilustracion-contaminacion-ambiental-dibujada-mano_23-2150350835.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707264000&semt=ais',
        contenido: 'Usa tapabocas en áreas con alta concentración de contaminantes para proteger tus vías respiratorias. Evita el ejercicio al aire libre en días de alta contaminación y mantente informado sobre la calidad del aire en tu área.',
      },
      {
        titulo: 'Invernadero',
        imagen: 'https://img.freepik.com/vector-gratis/composicion-isometrica-robots-agricolas_1284-25965.jpg?size=338&ext=jpg&ga=GA1.1.539837299.1711670400&semt=ais',
        contenido: 'La calidad del aire en invernaderos es crucial para el crecimiento de las plantas. Es importante controlar los niveles de dióxido de carbono (CO2), humedad y temperatura para optimizar la producción. La ventilación adecuada y el monitoreo constante son clave para mantener un entorno saludable para las plantas.',
      }
    ];

    return (
      <div style={{ width: '100%'}}>
        <div style={{ background: 'white' }}> 
          <SensorData />
        </div>
        <div style={{ background:"#F2F4F4", padding: '50px 50px', height: '800px'}}>
          <Typography variant="h4" gutterBottom style={{color: '#17202A', textAlign: 'center', marginBottom: '50px', height: 'auto', fontSize: '40px', fontWeight: 'bold'}}>
            Noticias Destacadas Para Ti <span style={{color: '#154360'}}>{user.name.toUpperCase()}</span>
          </Typography>
          <NoticesSidebar noticias={noticias} />
        </div>
      </div>
    );
  }
}

export default Home;
