import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Box from '@mui/material/Box';
import Menu from '../users/components/Menu';
import AllUsers from "../pages/AllUsers";
import Profile from "../pages/Profile";



const Routes = ({ user }) => {

  return (
    <div>
      <Router>
        <Box>
          <Menu />
        </Box>
        <Box   >
          <Switch>
            <Route path="/" exact>
              <AllUsers user={user} />
            </Route>
            <Route path="/profile" exact>
              <Profile user={user} />
            </Route>
          </Switch>
        </Box>
      </Router>
    </div>

  );
};

export default Routes;
