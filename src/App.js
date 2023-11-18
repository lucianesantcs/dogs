import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { UserStorage } from "./UserContext";

import "./App.css";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/conta" component={User} />
          </Switch>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
