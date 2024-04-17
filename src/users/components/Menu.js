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
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                width: '100%',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Ajustamos la sombra
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: '20px 10px',
                    background: '#F2F4F4',
                }}
            >
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="contained"
                        startIcon={<AccountCircleIcon />}
                        onClick={goProfile}
                        sx={{ textTransform: 'none', minWidth: '120px', justifyContent: 'center', borderRadius: 20, margin: '0 5px' }}
                    >
                        Mi Perfil
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<HomeIcon />}
                        onClick={goHome}
                        sx={{ textTransform: 'none', minWidth: '120px', justifyContent: 'center', borderRadius: 20, margin: '0 5px' }}
                    >
                       Inicio
                    </Button>
                </Box>
                <Button
                    variant="outlined"
                    startIcon={<ExitToAppIcon />}
                    onClick={cerrarSesion}
                    sx={{ textTransform: 'none', minWidth: '120px', justifyContent: 'center', borderRadius: 20, margin: '0 5px' }}
                >
                    Cerrar Sesión
                </Button>
            </Box>
        </Box>
    );
}

export default Menu;
