import React, { Component } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  Grid
} from "@mui/material";
import updateUser from "../hooks/updateUser";
import getUserId from "../hooks/getUserId";

class FormUpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      picture: "",
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      dateOfBirth: "",
      phone: ""
    };
  }

  componentDidMount() {
    this.getUserById();
  }

  async getUserById() {
    const { id } = this.props;
    const fullDataUser = await getUserId(id);
    this.setState({
      title: fullDataUser.title,
      firstName: fullDataUser.firstName,
      lastName: fullDataUser.lastName,
      gender: fullDataUser.gender,
      email: fullDataUser.email,
      dateOfBirth: fullDataUser.dateOfBirth.slice(0, 10),
      phone: fullDataUser.phone,
      picture: fullDataUser.picture
    });
  }

  handleUpdateUser = async () => {
    const { id, handleClose } = this.props;
    const { firstName, lastName, gender, email, dateOfBirth, phone, picture } = this.state;
    await updateUser(id, firstName, lastName, gender, email, dateOfBirth, phone, picture);
    handleClose();
  };

  render() {
    const { isUpdate, id, handleClose } = this.props;
    const {
      title,
      picture,
      firstName,
      lastName,
      gender,
      email,
      dateOfBirth,
      phone
    } = this.state;

    return (
      <Box mt={2} mb={2} style={{ overflowY: 'auto' }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography mb={2}>{isUpdate ? "Editar Usuario" : "Ver Usuario"}</Typography>
          <Button variant="contained" onClick={handleClose} mt={1}>
            X
          </Button>
        </Box>
        <form>
          <Grid container spacing={2}>
            {/* Renderizado de campos de formulario */}
          </Grid>
          {isUpdate && (
            <Button variant="contained" onClick={this.handleUpdateUser} mt={2} mb={2}>
              Actualizar
            </Button>
          )}
        </form>
      </Box>
    );
  }
}

export default FormUpdateUser;
