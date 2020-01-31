import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

export default class MainApp extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      optionsData: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        optionsData: []
      };
    });
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.optionsData.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => {
      return {
        optionsData: prevState.optionsData.concat(option)
      };
    });
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      optionsData: prevState.optionsData.filter(
        option => optionToRemove !== option
      )
    }));
  }

  Header = "Header";
  Footer = "Footer";
  Action = "ActionParent";
  MainApp = "MainAppMainParent";
  AddOption = "AddOption";
  Options = "Options";
  render() {
    return (
      <div>
        <Header headerMain={this.Header} />
        <h3>{this.MainApp}</h3>
        <Action actionMain={this.state.optionsData.length > 0} />
        <AddOption
          actionMain={this.state.optionsData.length > 0}
          addOptionMain={this.AddOption}
          handleAddOption={this.handleAddOption}
        />
        <Options
          optionsMain={this.Options}
          optionsArray={this.state.optionsData}
          handleDeleteOptions={this.handleDeleteOptions}
          actionMain={this.state.optionsData.length > 0}
          handleDeleteOption={this.handleDeleteOption}
        />
        <Footer footerMain={this.Footer} />
      </div>
    );
  }
}
