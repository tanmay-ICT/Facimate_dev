//Hobby & Pro Interests

import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Form, Card, Col, Dropdown, Switch } from "react-bootstrap"

export class Userinterests extends Component {
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
            {/* Hobbies Input */}

            <Form.Group
              as={Col}
              id="hobby1 hobby2 hobby3"
              controlId="formGridState"
            >
              <Form.Label>Choose your hobbies</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                type="hobby1"
                name="hobby1"
                value={values.hobby1}
                onChange={handleChange('hobby1')}
                style={{ marginBottom: "1em" }}
              >
                <option>Choose...</option>
                <option>📖 Reading</option>
                <option>⚽️ Football</option>
                <option>🌱 Gardening</option>
                <option>🥾 Hiking</option>
                <option>📸 Photography</option>
                <option>🧗‍♀️ Rock Climbing</option>
                <option>🎮 Video Games</option>
                <option>🏃‍♂️ Running</option>
                <option>🍳 Cooking</option>
                <option>🏇 Horse Riding</option>
                <option>🥖 Baking</option>
                <option>🧳 Travelling</option>
                <option>🤝 Volunteering</option>
              </Form.Control>

              <Form.Control
                as="select"
                defaultValue="Choose..."
                type="hobby2"
                name="hobby2"
                value={values.hobby2}
                onChange={handleChange('hobby2')}
                style={{ marginBottom: "1em" }}
              >
                <option>Choose...</option>
                <option>📖 Reading</option>
                <option>⚽️ Football</option>
                <option>🌱 Gardening</option>
                <option>🥾 Hiking</option>
                <option>📸 Photography</option>
                <option>🧗‍♀️ Rock Climbing</option>
                <option>🎮 Video Games</option>
                <option>🏃‍♂️ Running</option>
                <option>🍳 Cooking</option>
                <option>🏇 Horse Riding</option>
                <option>🥖 Baking</option>
                <option>🧳 Travelling</option>
                <option>🤝 Volunteering</option>
              </Form.Control>

              <Form.Control
                as="select"
                defaultValue="Choose..."
                type="hobby3"
                name="hobby3"
                value={values.hobby3}
                onChange={handleChange('hobby3')}
                style={{ marginBottom: "1em" }}
              >
                <option>Choose...</option>
                <option>📖 Reading</option>
                <option>⚽️ Football</option>
                <option>🌱 Gardening</option>
                <option>🥾 Hiking</option>
                <option>📸 Photography</option>
                <option>🧗‍♀️ Rock Climbing</option>
                <option>🎮 Video Games</option>
                <option>🏃‍♂️ Running</option>
                <option>🍳 Cooking</option>
                <option>🏇 Horse Riding</option>
                <option>🥖 Baking</option>
                <option>🧳 Travelling</option>
                <option>🤝 Volunteering</option>
              </Form.Control>

              <Form.Text className="text-muted">
                Please select 3 hobbies.
              </Form.Text>
            </Form.Group>

            {/* Professional Interests Input */}

            <Form.Group
              as={Col}
              id="proInt1 proInt2 proInt3"
              controlId="formGridState"
            >
              <Form.Label>Choose your professional interests</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                type="proInt1"
                name="proInt1"
                value={values.proInt1}
                onChange={handleChange('proInt1')}
                style={{ marginBottom: "1em" }}
              >
                <option>Choose...</option>
                <option>🎨 UI/UX designing</option>
                <option>💻 Programming</option>
                <option>📷 Photography</option>
                <option>📱 App Development</option>
                <option>🌀 Image Processing</option>
                <option>📊 Data Analytics</option>
                <option>🎛 Emedded Systems</option>
                <option>🧬 Machine Learning</option>
                <option>👾 Game Develpoment</option>
                <option>📰 Journalism</option>
                <option>💥 3D Animations</option>
                <option>🎥 Videography</option>
                <option>👩‍💻 Freelancing</option>
              </Form.Control>

              <Form.Control
                as="select"
                defaultValue="Choose..."
                type="proInt2"
                name="proInt2"
                value={values.proInt2}
                onChange={handleChange('proInt2')}
                style={{ marginBottom: "1em" }}
              >
                <option>Choose...</option>
                <option>🎨 UI/UX designing</option>
                <option>💻 Programming</option>
                <option>📷 Photography</option>
                <option>📱 App Development</option>
                <option>🌀 Image Processing</option>
                <option>📊 Data Analytics</option>
                <option>🎛 Emedded Systems</option>
                <option>🧬 Machine Learning</option>
                <option>👾 Game Develpoment</option>
                <option>📰 Journalism</option>
                <option>💥 3D Animations</option>
                <option>🎥 Videography</option>
                <option>👩‍💻 Freelancing</option>
              </Form.Control>

              <Form.Control
                as="select"
                defaultValue="Choose..."
                type="proInt3"
                name="proInt3"
                value={values.proInt3}
                onChange={handleChange('proInt3')}
                style={{ marginBottom: "1em" }}
              >
                <option>Choose...</option>
                <option>🎨 UI/UX designing</option>
                <option>💻 Programming</option>
                <option>📷 Photography</option>
                <option>📱 App Development</option>
                <option>🌀 Image Processing</option>
                <option>📊 Data Analytics</option>
                <option>🎛 Emedded Systems</option>
                <option>🧬 Machine Learning</option>
                <option>👾 Game Develpoment</option>
                <option>📰 Journalism</option>
                <option>💥 3D Animations</option>
                <option>🎥 Videography</option>
                <option>👩‍💻 Freelancing</option>
              </Form.Control>

              <Form.Text className="text-muted">
                Please select 3 professional interests.
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

export default Userinterests;
