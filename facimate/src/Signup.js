import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from './contexts/AuthContext'
import "firebase/auth";
import "firebase/firestore";



export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const ageRef = useRef()
  // const distanceRef = useRef()
  // const locationRef = useRef()
  // const nameRef = useRef()
  // const urlRef = useRef()
  // const verifiedRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const fb = require('./firebase.js');

    async function handleSubmit(e){
        e.preventDefault()
        
        if (passwordRef.current.value !==
          passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
          }

        try{
            setError('')
            setLoading(true)
            //Working code
          //   await signup(emailRef.current.value,passwordRef.current.value)
          //   history.push("/")
          //  } catch {
          //    setError('Failed to create an account')
          //  }
          //  setLoading(false)

          const cred = await signup(emailRef.current.value,passwordRef.current.value, ageRef.current.value)
          if (cred) {
            console.log({ cred });
            const userId = cred.user.uid;
            const userData = {
                email: emailRef.current.value,
                age: ageRef.current.value
                // distance: 'distance',
                // location: 'location',
                // name: 'name',
                // url: 'url',
                // verified: 'verified'
            };
        
            fb.peopleCollection
            .doc(userId)
            .set(userData)
            .then(() => {
              console.log('User successfully added to the DB!');
            })
            .then(() => {
              console.log('User created!');
              history.push("/")
            })
            .catch(e => {
              console.log('Error adding user to the DB: ', e);
            });
          }
        }
        catch {
          setError('Failed to create an account')
        }
          setLoading(false)
      }

        return (
            <>
              <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Sign Up</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Form.Group id="">
                      <Form.Label>Age</Form.Label>
                      <Form.Control type="number" ref={ageRef} required />
                    </Form.Group>
                    {/* <Form.Group id="">
                      <Form.Label>Distance</Form.Label>
                      <Form.Control type="string" ref={distanceRef} required />
                    </Form.Group>
                    <Form.Group id="">
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="string" ref={locationRef} required />
                    </Form.Group>
                    <Form.Group id="">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="string" ref={nameRef} required />
                    </Form.Group>
                    <Form.Group id="">
                      <Form.Label>Profile picture URL</Form.Label>
                      <Form.Control type="string" ref={urlRef} required />
                    </Form.Group>
                    <Form.Group id="">
                      <Form.Label>Human Verification - Are you a human?</Form.Label>
                      <Form.Control type="boolean" ref={verifiedRef} required />
                    </Form.Group> */}
                        <Button disabled={loading} className="w-100" type="submit">
                        Sign Up
                        </Button>
                  </Form>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </Card.Body>
              </Card>
            
            </>
          )
}