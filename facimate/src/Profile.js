import React, { useState } from "react"
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./Explore.css";
import "./Profile.css";
import LogoHead from "./LogoHead";

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
        window.location.href = "/login";
      } catch {
        setError("Failed to log out")
      }
    }
  
    return (
      <>
            
            <div className="menu"> 
            <h2 className="text-center">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-7">
              Update Profile
            </Link>
            <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
          </div>
        <LogoHead/>
      </>
    )
  }