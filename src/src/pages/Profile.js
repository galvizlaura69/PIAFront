import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import swal from "sweetalert";
import updateUser from "../users/hooks/updateUser";
import getUserId from "../users/hooks/getUserId";
import { useHistory } from 'react-router-dom';
import deleteUser from "../users/hooks/deleteUser";

const Profile = ({user, setUsuario}) => {
  const history = useHistory();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  console.log(user, 'usuario')

  const updateCurrentUser = async()=> {
      try {
      await updateUser({ id:user._id, name, email, password});
      const userUpdated = await getUserId(user._id);
      console.log(userUpdated, 'actualizado');
      localStorage.setItem('user', JSON.stringify(userUpdated));
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
  const deleteCurrentUser = async()=> {
    try {
    const response = await deleteUser(user._id);
    console.log(response);
      swal({
        title: "Genial",
        text: "usuario eliminado exitosamente",
        icon: "success",
      });
      setTimeout(() => {
        setUsuario(null);
        localStorage.setItem('user', null);

      }, 2000);
    }catch(e) {
      swal({
        title: "fallo",
        text: "no se pudo eliminar, intenta de nuevo",
        icon: "error",
      });
    }
};

  return (
    <>
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
      <Box m={2} p={2}>
            <Typography style={{ fontWeight: 'bold',fontSize: '16'}}>
              Si no desea continuar usando la aplicación, puede darse de baja
            </Typography>
            <Button variant="contained" onClick={() => deleteCurrentUser()}>
                DARME DE BAJA
              </Button>
      </Box>
    </>
  );
};

export default Profile;