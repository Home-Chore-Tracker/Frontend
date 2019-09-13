import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { initial } from "../actions";
// import { GlobalStyle, AppContainer, H1 } from "../styles";
import MainPage from "./components/chores";
import withAuthenticate from "../src/components/authentication/withAuthenticate";
import Login from "../src/components/login/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />;
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(MainPage)(Login);
export default App;
