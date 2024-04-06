import React, {useEffect} from "react";
import Routes from "./routes/Routes";
import Login from "./pages/Login";
import './styles.css';
const App = () => {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  return <>
{usuario ? <Routes user={usuario} setUsuario={setUsuario} /> : <Login setUsuario={setUsuario} />}
  </>;
}

export default App;
