import React from "react";
import Box from '@mui/material/Box';
import { app } from "../../config/fb";
import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';

const Menu = () => {
    const history = useHistory();

    const cerrarSesion = () => {
        app.auth().signOut();
      };

    const goProfile = ()=> {
        history.push('/profile'); // Cambia '/ruta-destino' por la ruta a la que quieras redireccionar
    };

    return (
        <Box sx={{ display:"flex",flexDirection:"row-reverse", padding:1 }} >
            <Button variant="contained" onClick={goProfile}>Mi Perfil</Button>  
            <Button variant="contained" onClick={cerrarSesion}>Cerrar Sesión</Button>       

        </Box>
        
    )
}
export default Menu;


