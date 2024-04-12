import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Menu = ({ setUsuario }) => {
    const history = useHistory();

    const cerrarSesion = () => {
        setUsuario(null);
        localStorage.removeItem('user');
    };

    const goProfile = () => {
        history.push('/profile');
    };

    const goHome = () => {
        history.push('/');
    };

    return (
        <Box sx={{ display:"flex", justifyContent: "space-between", alignItems: "center", padding: 1 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                    variant="contained"
                    startIcon={<AccountCircleIcon />}
                    onClick={goProfile}
                    sx={{ textTransform: 'none', minWidth: '120px', justifyContent: 'center' }}
                >
                    Mi Perfil
                </Button>
                <Button
                    variant="contained"
                    startIcon={<HomeIcon />}
                    onClick={goHome}
                    sx={{ textTransform: 'none', minWidth: '120px', justifyContent: 'center' }}
                >
                   Inicio
                </Button>
            </Box>
            <Button
                variant="outlined"
                startIcon={<ExitToAppIcon />}
                onClick={cerrarSesion}
                sx={{ textTransform: 'none', minWidth: '120px', justifyContent: 'center' }}
            >
                Cerrar Sesión
            </Button>
        </Box>
    );
}

export default Menu;
