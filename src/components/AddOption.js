import React, { Component } from "react";

export default class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  /* componentDidMount() {
    return (this.state = {
      error: null
    });
  } */
  addUser(e) {
    e.preventDefault();
    const uname = e.target.elements.uname.value.trim();
    alert(uname);
  }
  handleAddOption(e) {
    e.preventDefault();

    const uname = e.target.elements.uname.value.trim();
    const error = this.props.handleAddOption(uname);

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.props.addOptionMain}
        {this.state.error ? (
          <div class="col-3 alert alert-danger" role="alert">
            {this.state.error}
          </div>
        ) : null}
        <form onSubmit={this.handleAddOption}>
          Name: <input type="text" name="uname" />
          <button class="btn btn-success">Add User</button>
        </form>
      </div>
    );
  }
}
