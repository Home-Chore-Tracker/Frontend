import React, { Component } from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  FormText
} from 'reactstrap';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validate: {
        emailState: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success';
    } else {
      validate.emailState = 'has-danger';
    }
    this.setState({ validate });
  }

  handleChange = async event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({ [name]: value });
  };

  submitForm = e => {
    const user = this.state.email;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container className="Login">
        <div className="breathingRoom" />
        <h2>Sign In</h2>
        <Form className="form" onSubmit={e => this.submitForm(e)}>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="email"
                name="email"
                id="Email"
                placeholder="awesome@email.com"
                value={email}
                valid={this.state.validate.emailState === 'has-success'}
                invalid={this.state.validate.emailState === 'has-danger'}
                onChange={e => {
                  this.validateEmail(e);
                  this.handleChange(e);
                }}
              />
              <FormFeedback valid>
                My, what a good looking email you have
              </FormFeedback>
              <FormFeedback>
                Somethings not right... Please input a correct email.
              </FormFeedback>
              <FormText>Your username is most likely your email.</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="********"
                value={password}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Button onClick={this.submitForm}>Login</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
