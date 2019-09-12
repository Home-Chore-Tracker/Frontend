import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { initial } from "../actions";
// import { GlobalStyle, AppContainer, H1 } from "../styles";
import Village from "./Village";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: "",
        password: ""
      } /*,
      mode: "Add",
      id: ""*/
    };
  }

  componentDidMount() {
    this.props.initial();
  }

  //   addSmurf = event => {
  //     event.preventDefault();
  //     this.props.addSmurfs(this.state.smurf);
  //     this.defaultForm();
  //   };

  //   updateSmurf = () => {
  //     this.props.updateSmurfs(this.state.smurf, this.state.id);
  //     this.defaultForm();
  //   };

  //   deleteSmurf = id => {
  //     this.props.deleteSmurfs(id);
  //   };

  //   toggleMode = (id, name) => {
  //     this.setState({
  //       ...this.state,
  //       mode: "Update",
  //       id: id,
  //       smurf: {
  //         ...this.state.smurf,
  //         name: name
  //       }
  //     });
  //   };

  //   defaultForm = () => {
  //     this.setState({
  //       ...this.state,
  //       mode: "Add",
  //       smurf: {
  //         ...this.state.smurf,
  //         name: "",
  //         age: "",
  //         height: ""
  //       }
  //     });
  //   };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      login: {
        ...this.state.login,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <H1>Welcome to Home Chore Tracker</H1>
          <Village
            mode={this.state.mode}
            toggleMode={this.toggleMode}
            handleChange={this.handleChange}
            name={this.state.smurf.name}
            age={this.state.smurf.age}
            height={this.state.smurf.height}
            addSmurf={this.addSmurf}
            updateSmurf={this.updateSmurf}
            deleteSmurf={this.deleteSmurf}
            smurfs={this.props.smurfs}
            defaultForm={this.defaultForm}
          />
        </AppContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  {
    initial
  }
)(App);
