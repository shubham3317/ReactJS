import React, { Component } from "react";

/* export default class Header extends Component {
  render() {
    return <div>{this.props.headerMain}</div>;
  }
} */

//No Render Function is Used
const Header = props => {
  return <div>{props.headerMain}</div>;
};
//Export at end of last curly brace
export default Header;
