// Bio & 1 line tagline

import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Form, Card, Col, Dropdown, Switch} from "react-bootstrap"

export class Userbio extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
   
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
            {/* About Me Input */}

            <Form.Group id="aboutMe">
              <Form.Label>About me</Form.Label>
              <Form.Control
                type="name"
                name="aboutMe"
                defaultValue={values.aboutMe}
                onChange={handleChange('aboutMe')}
                placeholder="Say something interesting about yourself..."
              />
              <Form.Text className="text-muted">
                Write a short bio about yourself.
              </Form.Text>
            </Form.Group>

            {/* One Line Tagline Input */}

            <Form.Group id="onelineTagline">
              <Form.Label>One Line Tagline</Form.Label>
              <Form.Control
                type="name"
                name="onelineTagline"
                defaultValue={values.onelineTagline}
                onChange={handleChange('onelineTagline')}
                placeholder="Describe yourself in one line"
              />
              <Form.Text className="text-muted">
                This tagline will appear on your profile card. Make a good first
                impression.
              </Form.Text>
            </Form.Group>
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Userbio;
