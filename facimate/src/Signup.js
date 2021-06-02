import React, {Component} from 'react'
import "firebase/auth";
import {Form, Button, Card, Col, Dropdown} from "react-bootstrap"
// import { Link } from "react-router-dom"
import "firebase/firestore";
import {auth, createUserDocument} from './firebase';


class Signup extends Component {
    state = {email: '', password: '', displayName: '', age: '', gender: '', location: '', profilePicture: '', aboutMe: '', onelineTagline: ''};

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password, displayName, age, gender, location, profilePicture, aboutMe, onelineTagline} = this.state;
        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            console.log(user);
            await createUserDocument(user, {displayName, age, gender, location, profilePicture, aboutMe, onelineTagline});
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
            aboutMe:'',
            onelineTagline:''
        });
    };

    render() {
        const {email, password, displayName, age, gender, location, profilePicture, aboutMe, onelineTagline} = this.state;
        return (

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
                                    value={email}
                                    onChange={this.handleChange}
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
                                    value={password}
                                    onChange={this.handleChange}
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
                                    value={displayName}
                                    onChange={this.handleChange}
                                    placeholder="Eg: John Appleseed"
                                />
                                <Form.Text className="text-muted">
                                    Please enter your first and last name.
                                </Form.Text>
                            </Form.Group>

                            {/* Age Input */}

                            <Form.Group id="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="age"
                                    value={age}
                                    onChange={this.handleChange}
                                    placeholder="Enter your age"
                                />
                                <Form.Text className="text-muted">
                                    Please enter a valid age.
                                </Form.Text>
                            </Form.Group>

                            {/* Gender Input */}

                            <Form.Group id="gender">
                                <Form.Label>Gender</Form.Label>
                                {/* <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Female"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        value={gender}
                                        defaultChecked={this.state.selectedOption === {gender}}
                                        onChange={this.onValueChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Male"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        value={gender}
                                        defaultChecked={this.state.selectedOption === {gender}}
                                        onChange={this.onValueChange}
                                    />
                                </Col> */}

                                <Dropdown>
                                    <Dropdown.Toggle 
                                    variant="success" 
                                    id="dropdown-basic"
                                    type="dropdown"
                                    label="Male"
                                    name="gender"
                                    value={gender}
                                    onChange={this.handleChange}
                                    >
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                                        <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
                                        <Dropdown.Item eventKey="I prefer not to say">I prefer not to say</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    
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
                                    value={location}
                                    onChange={this.handleChange}
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
                                    value={profilePicture}
                                    onChange={this.handleChange}
                                    placeholder="Please insert an image URL"
                                />
                                <Form.Text className="text-muted">
                                    Please insert an image URL.
                                </Form.Text>
                            </Form.Group>

                            {/* Hobbies Input */}


                            {/* Professional Interests Input */}

                            {/* About Me Input */}

                            <Form.Group id="aboutMe">
                                <Form.Label>About me</Form.Label>
                                <Form.Control
                                    type="name"
                                    name="aboutMe"
                                    value={aboutMe}
                                    onChange={this.handleChange}
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
                                    value={onelineTagline}
                                    onChange={this.handleChange}
                                    placeholder="Describe yourself in one line"
                                />
                                <Form.Text className="text-muted">
                                    This tagline will appear on your profile card. Make a good first impression.
                                </Form.Text>
                            </Form.Group>

                        </Card.Body>
                    </Card>

                    {/* Button */}

                    <Button variant="primary" className="w-100" type="submit">
                        Sign Up
                    </Button>
                </form>
                {/*<div className="w-100 text-center mt-2">*/}
                {/*    Already have an account? <Link to="/login">Log In</Link>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Signup;