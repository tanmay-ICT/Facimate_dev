// E-mail, Password & FirstName
import { Link } from "react-router-dom"
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Form, Card } from "react-bootstrap";
// import UserForm from "./Userform";

export class Usercreds extends Component {

    state = {
        step: 1,
        email: '',
        password: '',
        displayName: ''
      };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
   
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
            <div>
                <form className="signup-login" onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Get Started</h2>
                    <Card>
                        <Card.Body>

                            {/* Email Input */}

                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    defaultValue={values.email}
                                    onChange={handleChange('email')}
                                    placeholder="Enter a valid email address"
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            {/* Password Input */}

                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    defaultValue={values.password}
                                    onChange={handleChange('password')}
                                    placeholder="Password"
                                />
                                <Form.Text className="text-muted">
                                    Please enter a minimum 6 characters password.
                                </Form.Text>
                            </Form.Group>

                            {/* Name Input */}

                            <Form.Group id="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="name"
                                    name="displayName"
                                    defaultValue={values.displayName}
                                    onChange={handleChange('displayName')}
                                    placeholder="Eg: John Appleseed"
                                />
                                <Form.Text className="text-muted">
                                    Please enter your first and last name.
                                </Form.Text>
                            </Form.Group>

                        </Card.Body>
                    </Card>

                    {/* Button */}

                    <Button color="primary" variant="contained" onClick={this.continue}>Continue</Button>

                </form>
                <div className="w-100 text-center mt-2">
                   Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Usercreds;