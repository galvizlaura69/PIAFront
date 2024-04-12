import React, { Component } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import swal from 'sweetalert';
import createUser from "../../users/hooks/createUser";

class FormCreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      hasBadRequest: true,
    };
  }

  validarEmail = (email) => {
    // Expresión regular para validar un email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  handleBlur = () => {
    const { email } = this.state;
    this.setState({ hasBadRequest: !this.validarEmail(email) });
  };

  handleGuardar = async () => {
    const { firstName, lastName, email } = this.state;
    try {
      const guardar = await createUser(firstName, lastName, email);
      console.log(guardar);
      this.props.handleClose();
      swal({
        title: "Exitoso",
        text: "Se ha guardado el usuario exitosamente",
        icon: "success"
      });
    } catch (error) {
      swal({
        title: "Error",
        text: "No se ha podido guardar el usuario",
        icon: "error"
      });
      return error.message;
    }
  };

  render() {
    const { firstName, lastName, email, hasBadRequest } = this.state;

    return (
      <Box mt={2} mb={2}>
        <Typography mb={2}>CREAR USUARIO</Typography>
        <form>
          <Box mb={2}>
            <TextField
              label="Nombre"
              variant="outlined"
              sx={{ mb: 2 }}
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => {
                this.setState({ firstName: e.target.value });
              }}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              sx={{ mb: 2 }}
              placeholder="Apellido"
              value={lastName}
              onChange={(e) => {
                this.setState({ lastName: e.target.value });
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              sx={{ mb: 2 }}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              onBlur={this.handleBlur}
            />
          </Box>
          <Box>
            <Button 
              variant="contained"
              onClick={this.handleGuardar}
              disabled={hasBadRequest}
              onBlur={this.handleBlur}
            >
              Guardar
            </Button>
          </Box>
          {hasBadRequest && <p>Hay un error en el email</p>}
        </form>
      </Box>
    );
  }
}

export default FormCreateUser;
