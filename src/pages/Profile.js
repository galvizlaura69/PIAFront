import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import swal from "sweetalert";
import updateUser from "../users/hooks/updateUser";

const Profile = ({user}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  console.log(user, 'usuario')

  const updateCurrentUser = async()=> {
      try {
      const response = await updateUser({ id:user._id, name, email, password});
      console.log(response);
        swal({
          title: "Genial",
          text: "nuevo usuario regitrado",
          icon: "success",
        });
      }catch(e) {
        swal({
          title: "fallo",
          text: "no se pudo actualizar, intenta de nuevo",
          icon: "error",
        });
      }
  };

  return (
      <Box m={2} p={2}>
        <form>
        <Typography style={{ fontWeight: 'bold',fontSize: '16'}}>
         MIS DATOS
        </Typography>
              <Box mb={2}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  type="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Correo"
                  variant="outlined"
                  value={email}
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  disabled
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Contraseña"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Box>
              <Button variant="contained" onClick={() => updateCurrentUser()}>
                Actualizar
              </Button>
            </form>
      </Box>
  );
};

export default Profile;