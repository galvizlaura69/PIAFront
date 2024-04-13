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
          color: 'black',
          height: '100%',
          fontWeight: 'bold',
        },
        image: {
          maxWidth: '150%',
          maxHeight: '150px',
          marginTop: '15px',
          marginBottom: '15px',
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
      <Grid container spacing={5}>
        {noticias.map((categoria, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper style={styles.paper}>
              <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                {categoria.titulo}
              </Typography>
              <img src={categoria.imagen} alt={categoria.titulo} style={styles.image} />
              <Typography>{categoria.contenido}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default NoticesSidebar;