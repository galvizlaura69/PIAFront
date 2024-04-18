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
        title: "Fallo",
        text: "No es posible actualizar, intenta de nuevo",
        icon: "error",
      });
    }
  };

  deleteCurrentUser = async () => {
    const { user, setUsuario } = this.props;
    try {
      const confirmDelete = window.confirm("¿Está seguro de que desea darse de baja? Esta acción no se puede deshacer.");
  
      if (confirmDelete) {
        const response = await deleteUser(user._id);
        swal({
          title: "Genial",
          text: "Usuario eliminado exitosamente",
          icon: "success",
        });
        setTimeout(() => {
          setUsuario(null);
          localStorage.setItem('user', null);
        }, 2000);
      } else {
        swal("Cancelado", "La acción de eliminación ha sido cancelada.", "info");
      }
    } catch (e) {
      swal({
        title: "Fallo",
        text: "No es posible eliminar, intenta de nuevo",
        icon: "error",
      });
    }
  };
  
  

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <Box m={2} p={2}>

          <form style={{ justifyContent: "center", alignItems: "center", padding: "50px 50px", marginRight: "130px", marginTop: '40px', marginLeft: '150px', backgroundColor: "#F2F4F4"}} >

            <Typography style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "30px"}}>
              MIS DATOS
            </Typography>

            <Box mb={3}>
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

            <Box mb={3}>
              <TextField
                label="Correo"
                variant="outlined"
                value={email}
                type="email"
                disabled
              />
            </Box>

            <Box mb={3}>
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

            <Button variant="contained" onClick={this.updateCurrentUser} style={{ marginTop: "15px"}}>
              Actualizar
            </Button>  

          </form>

          <img

            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-banca-linea_114360-21409.jpg?t=st=1712975210~exp=1712978810~hmac=e274be4fea8570a7de2033d1ed595e4490643dd286dfa8bf2f078948a0288ff6&w=1060"
            alt="Font Date"
            style={{ width: "500px", height: "400px", marginTop: "-900px", marginBottom: "40px", marginLeft: "750px" }}

          /> 

        </Box>

        <Box m={2} p={2} style={{ padding: "50px 200px", backgroundColor: "with", marginTop: "-30px"}}>

          <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
            Si no desea continuar utilizando el aplicativo puede darse de baja
          </Typography>

          <Button variant="contained" onClick={this.deleteCurrentUser} style={{ marginTop: "20px"}}>
            DARME DE BAJA
          </Button>

        </Box>
      </>
    );
  }
}

export default Profile;