import React, { Component } from 'react';
import "firebase/auth";
import "firebase/firestore";
import {auth, createUserDocument} from '../../firebase';
import Usercreds from './Usercreds';
import Userdetails from './Userdetails';
import Userinterests from './Userinterests';
import Userbio from './Userbio';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    email: '',
    password: '',
    displayName: '',
    age: '',
    gender: '',
    location: '',
    profilePicture: '',
    hobby1: '',
    hobby2: '',
    hobby3: '',
    proInt1:'',
    proInt2:'',
    proInt3:'',
    aboutMe: '',
    onelineTagline: ''
  };

    
    // window.location.href = "/";

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const {
        email,
        password,
        displayName,
        age,
        gender,
        location,
        profilePicture,
        hobby1,
        hobby2,
        hobby3,
        proInt1,
        proInt2,
        proInt3,
        aboutMe,
        onelineTagline
    } = this.state;
    try {
        const {user} = await auth.createUserWithEmailAndPassword(
            email,
            password
        );
        console.log(user);
        await createUserDocument(user, {
            displayName,
            age,
            gender,
            location,
            profilePicture,
            hobby1,
            hobby2,
            hobby3,
            proInt1,
            proInt2,
            proInt3,
            aboutMe,
            onelineTagline
        })
        window.location.href = "/";
    } catch (error) {
        console.log('error', error);
    }

    this.setState({
      email: '',
      password: '',
      displayName: '',
      age: '',
      gender: '',
      location: '',
      profilePicture: '',
      hobby1,
      hobby2,
      hobby3,
      proInt1,
      proInt2,
      proInt3,
      aboutMe: '',
      onelineTagline: ''
  });
};

  render() {
    const { step } = this.state;

    const { email,
        password,
        displayName,
        age,
        gender,
        location,
        profilePicture,
        hobby1,
        hobby2,
        hobby3,
        proInt1,
        proInt2,
        proInt3,
        aboutMe,
        onelineTagline } = this.state;

    const values = { email,
        password,
        displayName,
        age,
        gender,
        location,
        profilePicture,
        hobby1,
        hobby2,
        hobby3,
        proInt1,
        proInt2,
        proInt3,
        aboutMe,
        onelineTagline };

    switch (step) {
      case 1:
        return (
          <Usercreds
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Userdetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
        return (
          <Userinterests
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 4:
        return (
          <Userbio
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 6:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;