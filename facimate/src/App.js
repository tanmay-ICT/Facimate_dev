import React from "react";
import NavFooter from "./NavFooter";
// import Profile from "./Profile";
import Explore from "./Explore";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Signup from "./Signup";
import Login from "./Login";
import UpdateProfile from "./UpdateProfile"
import ForgotPassword from "./ForgotPassword"
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"
import "./App.css";


function App() {
  return (

    <div className="App">
      
      <Router>
        <AuthProvider> 
          <Switch>
            <PrivateRoute exact path="/" component={Explore}>
              {/* <Redirect to="/index.html" /> */}
            </PrivateRoute>
            <PrivateRoute path="/update-profile" component={UpdateProfile}></PrivateRoute>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/forgot-password" component={ForgotPassword}></Route>
            <Route path="/chat/:person">
              <NavFooter backButton ="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chat" >
              <NavFooter backButton ="/" />
              <Chats />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;