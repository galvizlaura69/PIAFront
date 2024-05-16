import React, { Component } from "react";


class Grafics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;

    return (
      <div style={{ width: '90%', margin:'auto'}}>
        <h1>Gráficas</h1>
      </div>
    );
  }
}

export default Grafics;
