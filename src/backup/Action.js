import React, { Component } from "react";

/* export default class Action extends Component {
  addUser(e) {
    e.preventDefault();
    const uname = e.target.elements.uname.value.trim();
    alert(uname);
  }
  render() {
    return (
      <div>
        <h4>{this.props.actionMain}</h4>
      </div>
    );
  }
} */

const Action = (props) => {
  return (
    <div>
      <h4>{props.actionMain}</h4>
    </div>
  )
}
export default Action
