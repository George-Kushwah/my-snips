import React, { Component } from "react";

export default class Errorcatch extends Component {
  constructor(props) {
    super(props);
    this.state = { haserror: false };
  }
  componentDidCatch(error) {
    this.setState({ haserror: error });
  }
  render() {
    if (this.state.haserror) {
      return (
        <div>
          <h3>Error Occurred</h3>
        </div>
      );
    }
    return this.props.children;
  }
}
