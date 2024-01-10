import "./App.css";
import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      data: [],
    };
  }

  handleChange = (text) => {
    this.setState({ value: text });
  };

  handleSubmit = () => {
    this.state.value != ""
      ? (this.state.data.push(this.state.value), this.setState({ value: "" }))
      : null;
  };

  handleDelete = (index) => {
    this.state.data.splice(index, 1);
    this.setState({ data: this.state.data });
  };

  handleUpdate = (index) => {
    let updatedData = prompt();
    // this.state.data.splice(index,1,updatedData)
    this.state.data[index] = updatedData;
    this.setState({ data: this.state.data });
  };

  render() {
    return (
      <div id="whole-container">
        <div id="container">
          <h1 id="header">TO-DO LIST</h1>

          <Input
            inputValue={this.state.value}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />

          <div>
            <h1>{this.state.value}</h1>
          </div>

          <List
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
            inputData={this.state.data}
          />
        </div>
      </div>
    );
  }
}