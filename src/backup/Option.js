import React, { Component } from "react";

/* export default class Option extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <h3 class="col-3">{this.props.data}</h3>
          <button
            class="btn btn-danger"
            onClick={e => {
              this.props.handleDeleteOption(this.props.data);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
} */

const Option = (props) => {
  return (
    <div>
      <div class="row">
        <h3 class="col-3">{props.data}</h3>
        <button
          class="btn btn-danger"
          onClick={e => {
            props.handleDeleteOption(props.data);
          }}
        >
          Delete
          </button>
      </div>
    </div>
  )
}

export default Option
