import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Box from '@mui/material/Box';
import Menu from '../users/components/Menu';
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Routes = ({ user , setUsuario }) => {

  return (
    <div>
      <Router>
        <Box>
          <Menu  setUsuario={setUsuario}/>
        </Box>
        <Box   >
          <Switch>
            <Route path="/" exact>
              <Home user={user} />
            </Route>
            <Route path="/profile" exact>
              <Profile user={user} setUsuario={setUsuario}  />
            </Route>
          </Switch>
        </Box>
      </Router>
    </div>

  );
};

export default Routes;
