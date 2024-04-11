import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import deleteUser from "../../users/hooks/deleteUser";
import swal from "sweetalert";

class FormDeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  handleDelete = async () => {
    const { user, handleClose } = this.props;
    try {
      await deleteUser(user.id);
      handleClose();
    } catch (error) {
      this.setState({ error: error.message });
      swal({
        title: "Error",
        text: "No se ha podido borrar",
        icon: "error",
      });
    }
  };

  render() {
    const { user, handleClose } = this.props;
    const { error } = this.state;

    return (
      <Box mt={2} mb={2}>
        <Typography mb={2}>
          Seguro que quiere borrar este usuario {user.id}
        </Typography>
        <form>
          <Button variant="contained" onClick={this.handleDelete}>
            Borrar
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cancelar
          </Button>
        </form>
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    );
  }
}

export default FormDeleteUser;
