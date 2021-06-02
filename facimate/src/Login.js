import React, { Component } from 'react'
import { auth, createUserDocument } from './firebase';
import {Form, Button, Card} from "react-bootstrap"

class Login extends Component {
    state = { email: '', password: '' };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (email && password) {
            try {
                await auth.signInWithEmailAndPassword(email, password);
            } catch (error) {
                console.log('error logging in', error);
            }
        }

        // this.setState({ email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <form className="signup-login" onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Welcome back!</h2>
                    <Card>
                        <Card.Body>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    placeholder="Eg: user@example.com"
                                />
                                <Form.Text className="text-muted">
                                    Please insert a valid email address.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    placeholder="Password"
                                />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                    <Button variant="primary" className="w-100" type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default Login;