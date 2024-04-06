import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';

const Menu = ({setUsuario}) => {
    const history = useHistory();

    const cerrarSesion = () => {
        setUsuario(null);
        localStorage.removeItem('user');
      };

    const goProfile = ()=> {
        history.push('/profile');
    };

    const goHome = ()=> {
        history.push('/');
    };

    return (
        <Box sx={{ display:"flex",gap:2, flexDirection:"row-reverse", padding:1 }} >
            <Button variant="outlined" onClick={cerrarSesion}>Cerrar Sesión</Button>  
            <Button variant="contained" onClick={goProfile}>Mi Perfil</Button>  
            <Button variant="contained" onClick={goHome}>Home</Button>  

        </Box>
    );
}

export default Menu;


