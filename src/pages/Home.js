import React, { Component } from "react";
import { Grid, Typography, Paper } from '@mui/material';
import getDataSensorAll from '../users/hooks/getDataSensorAll';

const noticias = [
  {
    titulo: 'Tecnología',
    imagen: 'https://img.freepik.com/foto-gratis/esfera-azul-brillante-sostenida-mano-humana-generada-ia_188544-41033.jpg',
    contenido: 'Descubre las últimas innovaciones tecnológicas que están cambiando el mundo. Desde inteligencia artificial hasta realidad aumentada, mantente al día con la vanguardia tecnológica.',
  },
  {
    titulo: 'Sensores',
    imagen: 'https://www.bloginstrumentacion.com/files/2021/06/beitragsbild_a-1200_diagnostic-function-1.jpg',
    contenido: 'Explora cómo los sensores están revolucionando la forma en que interactuamos con el entorno. Desde sensores de temperatura hasta acelerómetros, conoce las últimas tendencias en el campo de los sensores.',
  },
  {
    titulo: 'Avance del proyecto',
    imagen: 'https://miro.medium.com/v2/resize:fit:1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg',
    contenido: 'Sigue de cerca el progreso de nuestro emocionante proyecto. Desde el diseño hasta la implementación, te mantenemos informado sobre cada paso del camino.',
  },
  {
    titulo: 'Otras noticias',
    imagen: 'https://www.segurilatam.com/wp-content/uploads/sites/5/2023/12/modulo-sensor-pir.jpg',
    contenido: 'Descubre una variedad de noticias interesantes que no pertenecen a las categorías anteriores. Desde arte y cultura hasta curiosidades del mundo, ¡encuentra algo para todos los gustos!',
  },
];

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

    const styles = {
      root: {
        flexGrow: 1,
        padding: '16px',
      },
      paper: {
        padding: '16px',
        textAlign: 'center',
        color: '#333',
      },
      image: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    };

    return (
      <div style={styles.root}>
        <Typography variant="h4" gutterBottom>
          Últimas noticias para ti {user.name}
        </Typography>
        <Grid container spacing={3}>
          {noticias.map((categoria, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Paper style={styles.paper}>
                <Typography variant="h6" gutterBottom>
                  {categoria.titulo}
                </Typography>
                <img src={categoria.imagen} alt={categoria.titulo} style={styles.image} />
                {/* Contenido de las noticias */}
                <Typography>
                  {categoria.contenido}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {/* Mostrar datos del sensor */}
        <div>
          <Typography variant="h5" gutterBottom>
            Datos del Sensor:
          </Typography>
          {dataSensorList.map((data, index) => (
            <div key={index}>
              <Typography variant="subtitle1">CO2: {data.CO2}</Typography>
              <Typography variant="subtitle1">Fecha: {data.date}</Typography>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
