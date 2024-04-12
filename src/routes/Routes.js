import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Box from '@mui/material/Box';
import Menu from '../users/components/Menu';
import Home from "../pages/Home";
import Profile from "../pages/Profile";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      setUsuario: props.setUsuario
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Box>
            <Menu setUsuario={this.state.setUsuario} />
          </Box>
          <Box>
            <Switch>
              <Route path="/" exact>
                <Home user={this.state.user} />
              </Route>
              <Route path="/profile" exact>
                <Profile user={this.state.user} setUsuario={this.state.setUsuario} />
              </Route>
            </Switch>
          </Box>
        </Router>
      </div>
    );
  }
}

export default Routes;
