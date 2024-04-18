import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import getUsersAll from "../users/hooks/getUsersAll";
import createUser from "../users/hooks/createUser";
import swal from "sweetalert";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Nuevo icono de avatar
import EmailIcon from '@mui/icons-material/Email'; // Nuevo icono de correo electrónico

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistrando: false,
      name: "",
      email: "",
      password: "",
      users: [],
      showPassword: false, // Nuevo estado para controlar visibilidad de contraseña
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
          text: "Usuario o contraseña Erronea",
          icon: "error",
        });
      }
    } catch (e) {
      console.log(e, "error");
      swal({
        title: "Oops",
        text: "Usuario o contraseña Erronea",
        icon: "error",
      });
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.loginUser();
    }
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
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
              <h1 style={{ textAlign: 'center' }}>Registrarme</h1>
              <form style={{ marginLeft: '60px', padding: '30px 90px 30px 30px' }}>
                <Box mb={3}>
                  <TextField
                    label="Nombre"
                    type="text"
                    onChange={(e) => this.setState({ name: e.target.value })}
                    InputProps={{
                      endAdornment: (
                        <IconButton disabled>
                          <AccountCircleIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Correo"
                    type="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    InputProps={{
                      endAdornment: (
                        <IconButton disabled>
                          <EmailIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Contraseña"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    onKeyDown={this.handleKeyDown}
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={this.togglePasswordVisibility} >
                          {this.state.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      ),
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  onClick={() => this.createNewUser()}
                  style={{ textAlign: 'center', marginLeft: '63px', marginTop: '15px' }}>
                  Registrarme
                </Button><br />
                <Button onClick={() => this.setState({ isRegistrando: false })} style={{ textAlign: 'center', marginTop: '15px', marginLeft: '-1px' }}>
                  Ya tengo cuenta, iniciar sesión.
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <h1 style={{ textAlign: 'left', marginLeft: '100px', marginBottom: '-50px' }}>Iniciar Sesión</h1>
              <form style={{ marginTop: '100px', marginLeft: '80px' }}>
                <Box mb={3}>
                  <TextField
                    label="Correo"
                    value={email}
                    type="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    InputProps={{
                      endAdornment: (
                        <IconButton disabled>
                          <EmailIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    label="Contraseña"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    onKeyDown={this.handleKeyDown}
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={this.togglePasswordVisibility} >
                          {this.state.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      ),
                    }}
                  />
                </Box>
                <Button variant="contained" onClick={() => this.loginUser()} style={{ marginBottom: '20px' }}>
                  Iniciar sesión
                </Button><br />
                <Button onClick={() => this.setState({ isRegistrando: true })} style={{ marginLeft: '-09px' }}>
                  No tengo cuenta, quiero registrarme.
                </Button>
              </form>
              <img
                src="https://img.freepik.com/vector-gratis/ilustracion-concepto-banca-linea_114360-21409.jpg?t=st=1712975210~exp=1712978810~hmac=e274be4fea8570a7de2033d1ed595e4490643dd286dfa8bf2f078948a0288ff6&w=1060"
                alt="Font Date"
                style={{ width: "500px", height: "400px", marginTop: "-350px", marginBottom: "40px", marginLeft: "600px" }}
              />
            </div>
          )}
        </div>
      </Box>
    );
  }
}

export default Login;
