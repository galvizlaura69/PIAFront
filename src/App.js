import React from "react";
import Routes from "./routes/Routes";
import Login from "./pages/Login";
import './styles.css';
const App = () => {
  const [usuario, setUsuario] = React.useState(null);
  return <>
{usuario ? <Routes user={usuario} /> : <Login setUsuario={setUsuario} />}
  </>;
}

export default App;
