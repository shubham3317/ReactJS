import React, { Component } from "react";
import Option from "../components/Option";
/* export default class Options extends Component {
  render() {
    var option = "OptionChild";

    return (
      <div>
        <div>{this.props.optionsMain}</div>
        <button
          class="btn btn-danger"
          onClick={this.props.handleDeleteOptions}
          disabled={!this.props.actionMain}
        >
          Delete All
        </button>
        <h4>
          {this.props.optionsArray.map(option => (
            <Option
              data={option}
              handleDeleteOption={this.props.handleDeleteOption}
            />
          ))}
        </h4>
      </div>
    );
  }
} */

const Options = (props) => {
  return (
    <div>
      <div>{props.optionsMain}</div>
      <button
        class="btn btn-danger"
        onClick={props.handleDeleteOptions}
        disabled={!props.actionMain}
      >
        Delete All
        </button>
      <h4>
        {props.optionsArray.map(option => (
          <Option
            data={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </h4>
    </div>
  )
}

export default Options
