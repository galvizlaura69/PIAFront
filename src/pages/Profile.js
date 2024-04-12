import React, { Component } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import updateUser from "../users/hooks/updateUser";
import getUserId from "../users/hooks/getUserId";
import deleteUser from "../users/hooks/deleteUser";
import swal from "sweetalert";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email,
      password: props.user.password,
    };
  }

  updateCurrentUser = async () => {
    const { user, setUsuario } = this.props;
    const { name, email, password } = this.state;
    try {
      await updateUser({ id: user._id, name, email, password });
      const userUpdated = await getUserId(user._id);
      localStorage.setItem('user', JSON.stringify(userUpdated));
      swal({
        title: "Genial",
        text: "Datos actualizados",
        icon: "success",
      });
    } catch (e) {
      swal({
        title: "fallo",
        text: "no se pudo actualizar, intenta de nuevo",
        icon: "error",
      });
    }
  };

  deleteCurrentUser = async () => {
    const { user, setUsuario } = this.props;
    try {
      const response = await deleteUser(user._id);
      swal({
        title: "Genial",
        text: "usuario eliminado exitosamente",
        icon: "success",
      });
      setTimeout(() => {
        setUsuario(null);
        localStorage.setItem('user', null);
      }, 2000);
    } catch (e) {
      swal({
        title: "fallo",
        text: "no se pudo eliminar, intenta de nuevo",
        icon: "error",
      });
    }
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <Box m={2} p={2}>
          <form>
            <Typography style={{ fontWeight: "bold", fontSize: "16" }}>
              MIS DATOS
            </Typography>
            <Box mb={2}>
              <TextField
                label="Nombre"
                variant="outlined"
                type="name"
                value={name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Correo"
                variant="outlined"
                value={email}
                type="email"
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
                  this.setState({ password: e.target.value });
                }}
              />
            </Box>
            <Button variant="contained" onClick={this.updateCurrentUser}>
              Actualizar
            </Button>
          </form>
        </Box>
        <Box m={2} p={2}>
          <Typography style={{ fontWeight: "bold", fontSize: "16" }}>
            Si no desea continuar usando la aplicación, puede darse de baja
          </Typography>
          <Button variant="contained" onClick={this.deleteCurrentUser}>
            DARME DE BAJA
          </Button>
        </Box>
      </>
    );
  }
}

export default Profile;
