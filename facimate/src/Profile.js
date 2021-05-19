import React, { useState } from "react"
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import NavFooter from "./NavFooter";
import "./Explore.css";
import LogoHead from "./Logo";

export default function Explore() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
  
    return (
      <>
            <h2 className="text-center">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-7">
              Update Profile
            </Link>
            <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        <h1 className="explore"> Explore </h1>
        <LogoHead/>
        <NavFooter/>
      </>
    )
  }