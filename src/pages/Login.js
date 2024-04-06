import React, { useEffect ,useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import getUsersAll from "../users/hooks/getUsersAll";
import createUser from "../users/hooks/createUser";

const Login = ({setUsuario}) => {
  const [isRegistrando, setIsRegistrando] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers]= useState([]);

  const getList = async () => {
    const usersList = await getUsersAll();
    setUsers(usersList)
  };

  useEffect(()=>{
    getList();
  }, []);

  const createNewUser = async() => {
    try {
    const response = await createUser({name, email, password});
    console.log(response)
    setIsRegistrando(false);
    swal({
      title: "Genial",
      text: "nuevo usuario regitrado",
      icon: "success",
    });
    getList();
    }
    catch(e) {
      console.log(e, 'error')
      swal({
        title: "Oops",
        text: "fallo al  registrarse intenta de nuevo",
        icon: "error",
      });
    }
  };

  const loginUser = () => {
    try {
     const userLogged = users.find(userlisted=> (userlisted.email === email) && (userlisted.password === password));
     if(userLogged){
      setTimeout(()=>{
        setUsuario(userLogged)
      }, 1000);
     }
     else {
      swal({
        title: "Oops",
        text: "usuario o contraseña equivocado",
        icon: "error",
      });
     }
    }
    catch(e) {
      console.log(e, 'error')
      swal({
        title: "Oops",
        text: "usuario o contraseña equivocado",
        icon: "error",
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      loginUser();
    }
  };

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
                  variant="outlined"
                  type="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Correo"
                  variant="outlined"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Contraseña"
                  variant="outlined"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Box>
              <Button variant="contained" onClick={() => createNewUser()}>
                Registrarme
              </Button>
              <Button onClick={() => setIsRegistrando(false)}>
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
                  variant="outlined"
                  value={email}
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  onKeyDown={handleKeyDown}
                />
              </Box>
              <Button variant="contained" onClick={() => loginUser()}>
                Iniciar sesión
              </Button>
              <Button onClick={() => setIsRegistrando(true)}>
                No tengo cuenta, quiero registrarme.
              </Button>
            </form>
          </div>
        )}
      </div>
    </Box>
  );
};

export default Login;