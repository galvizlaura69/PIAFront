import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
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
                height: '60px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: '10px',
                    background: '#F2F4F4',
                    height: '100%',
                }}
            >
                <button
                    onClick={goHome}
                    style={{
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/ICON.svg`}
                        alt="Inicio"
                        style={{
                            width: '60px',
                            height: '60px',
                            objectFit: 'contain',
                        }}
                    />
                </button>
                <Box sx={{ display: "flex", gap: 2, }}>
                    <Button
                        variant="contained"
                        startIcon={<AccountCircleIcon />}
                        onClick={goProfile}
                        sx={{ textTransform: 'none', Width: '120px', justifyContent: 'center', borderRadius: 20, margin: '0 5px' }}
                    >
                        Mi Perfil
                    </Button>
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
        </Box>
    );
}

export default Menu;

