import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import getUsersAll from "../users/hooks/getUsersAll";
import createUser from "../users/hooks/createUser";
import swal from "sweetalert";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistrando: false,
      name: "",
      email: "",
      password: "",
      users: [],
    };
  }

  async componentDidMount() {
    await this.getList();
  }

  getList = async () => {
    const usersList = await getUsersAll();
    this.setState({ users: usersList });
  };

  createNewUser = async () => {
    const { name, email, password } = this.state;
    try {
      const response = await createUser({ name, email, password });
      console.log(response);
      this.setState({ isRegistrando: false });
      swal({
        title: "Genial",
        text: "Nuevo usuario registrado",
        icon: "success",
      });
      await this.getList();
    } catch (e) {
      console.log(e, "error");
      swal({
        title: "Oops",
        text: "Fallo al registrarse, intenta de nuevo",
        icon: "error",
      });
    }
  };

  loginUser = () => {
    const { users, email, password } = this.state;
    try {
      const userLogged = users.find(
        (userlisted) =>
          userlisted.email === email && userlisted.password === password
      );
      if (userLogged) {
        setTimeout(() => {
          localStorage.setItem("user", JSON.stringify(userLogged));
          this.props.setUsuario(userLogged);
        }, 1000);
      } else {
        swal({
          title: "Oops",
          text: "Usuario o contraseña equivocado",
          icon: "error",
        });
      }
    } catch (e) {
      console.log(e, "error");
      swal({
        title: "Oops",
        text: "Usuario o contraseña equivocado",
        icon: "error",
      });
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.loginUser();
    }
  };

  render() {
    const { isRegistrando, email, password } = this.state;
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          {isRegistrando ? (
            <div>
              <h1>Registrarme</h1>
              <form>
                <Box mb={2}>
                  <TextField
                    label="Nombre"
                    type="name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Correo"
                    type="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Contraseña"
                    type="password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </Box>
                <Button
                  variant="contained"
                  onClick={() => this.createNewUser()}
                >
                  Registrarme
                </Button>
                <Button onClick={() => this.setState({ isRegistrando: false })}>
                  Ya tengo cuenta, iniciar sesión.
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <h1>Iniciar Sesión</h1>
              <form>
                <Box mb={2}>
                  <TextField
                    label="Correo"
                    value={email}
                    type="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    onKeyDown={this.handleKeyDown}
                  />
                </Box>
                <Button variant="contained" onClick={() => this.loginUser()}>
                  Iniciar sesión
                </Button>
                <Button onClick={() => this.setState({ isRegistrando: true })}>
                  No tengo cuenta, quiero registrarme.
                </Button>
              </form>
            </div>
          )}
        </div>
      </Box>
    );
  }
}

export default Login;
