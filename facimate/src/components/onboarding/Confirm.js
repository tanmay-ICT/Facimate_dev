import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";



export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        email,
        displayName,
        location,
        hobby1,
        hobby2,
        hobby3,
        proInt1,
        proInt2,
        proInt3,
        bio,
        onelineTagline
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name:" secondary={displayName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email:" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation:" secondary={location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="1st Hobby:" secondary={hobby1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="2nd Hobby:" secondary={hobby2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="3rd Hobby:" secondary={hobby3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="1st Professional Interest:" secondary={proInt1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="2nd Professional Interest:" secondary={proInt2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="3rd Professional Interest:" secondary={proInt3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio:" secondary={bio} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Oneline Tagline:" secondary={onelineTagline} />
              </ListItem>
            </List>

            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" type="submit" onClick={this.continue}>
              Confirm & Continue
            </Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
