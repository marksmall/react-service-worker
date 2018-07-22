import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import logo from "./logo.svg";
import "./App.css";

const NavBar = () => (
  <div className="navbar">
    <Link to="/" onClick={createNotification("info")}>
      Feed
    </Link>

    <Link to="/profile" onClick={createNotification("warning")}>
      Profile
    </Link>
  </div>
);

const Template = ({ title }) => (
  <div>
    <NavBar />
    <p className="page-info">This is the {title} page.</p>
  </div>
);

const Feed = () => <Template title="Feed" />;

const Profile = () => <Template title="Profile" />;

export const createNotification = type => {
  return () => {
    switch (type) {
      case "info":
        NotificationManager.info("Info message");
        break;
      case "success":
        NotificationManager.success("Success message", "Title here");
        break;
      case "warning":
        NotificationManager.warning(
          "Warning message",
          "Close after 3000ms",
          3000
        );
        break;
      case "error":
        NotificationManager.error("Error message", "Click me!", 5000, () => {
          alert("callback");
        });
        break;
    }
  };
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Route exact path="/" component={Feed} />
          <Route path="/profile" component={Profile} />

          <NotificationContainer />
        </main>
      </BrowserRouter>
    );
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 className="App-title">Welcome to React</h1>
    //   </header>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
  }
}

export default App;
