import React, { Component } from 'react';
import { Typography, Paper, Grid } from '@mui/material';

class NoticesSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        paper: {
          padding: '8px',
          textAlign: 'center',
          color: '#333',
          height: '100%',
        },
        image: {
          maxWidth: '100%',
          maxHeight: '50px',
        },
        gridItem: {
          width: '100%',
        },
      },
    };
  }

  render() {
    const { noticias } = this.props;
    const { styles } = this.state;

    return (
      <Grid item xs={12} sm={6} md={3} style={styles.gridItem}>
        {noticias.map((categoria, index) => (
          <Paper key={index} style={styles.paper}>
            <Typography variant="h6" gutterBottom>
              {categoria.titulo}
            </Typography>
            <img src={categoria.imagen} alt={categoria.titulo} style={styles.image} />
            <Typography>{categoria.contenido}</Typography>
          </Paper>
        ))}
      </Grid>
    );
  }
}

export default NoticesSidebar;
