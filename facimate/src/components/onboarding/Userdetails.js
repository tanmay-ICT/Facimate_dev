//Age, Gender & Profile pic (if url)

import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Form, Card, Col, Dropdown, Switch} from "react-bootstrap"

export class Userdetails extends Component {
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
            {/* Age Input */}

            <Form.Group id="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                defaultValue={values.age}
                onChange={handleChange('age')}
                placeholder="Enter your age"
              />
              <Form.Text className="text-muted">
                Please enter a valid age.
              </Form.Text>
            </Form.Group>

            {/* Gender Input */}

            <Form.Group as={Col} id="gender" controlId="formGridState">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                type="gender"
                name="gender"
                value={values.gender}
                onChange={handleChange('gender')}
              >
                <option>Choose...</option>
                <option>Female</option>
                <option>Male</option>
                <option>Non - binary</option>
                <option>Transgender</option>
                <option>Intersex</option>
                <option>I prefer not to say</option>
              </Form.Control>
              <Form.Text className="text-muted">
                Please select your gender.
              </Form.Text>
            </Form.Group>

            {/* Location Input */}

            <Form.Group id="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="name"
                name="location"
                defaultValue={values.location}
                onChange={handleChange('location')}
                placeholder="Enter your location"
              />
              <Form.Text className="text-muted">
                We'll never share your location with anyone else.
              </Form.Text>
            </Form.Group>

            {/* Profile Picture Input */}

            <Form.Group id="profile">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="url"
                name="profilePicture"
                defaultValue={values.profilePicture}
                onChange={handleChange('profilePicture')}
                placeholder="Please insert an image URL"
              />
              <Form.Text className="text-muted">
                Please insert an image URL.
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

export default Userdetails;
