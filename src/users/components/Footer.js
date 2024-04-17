import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";

const Footer = () => {
  const phoneNumber = "+1-800-555-1234"; // Número de teléfono falso

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)', // Agrega la sombra en la parte superior
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="Llamar">
            <PhoneIcon />
          </IconButton>
          <Typography variant="body1">
            Contáctanos:{" "}
            <Link href={`tel:${phoneNumber}`} color="inherit">
              {phoneNumber}
            </Link>
          </Typography>
        </Box>
        <IconButton aria-label="Nuestra Empresa" sx={{ color: 'rgba(0, 0, 0, 0.8)' }}>
          <BusinessIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
