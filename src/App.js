import React, { useContext, useEffect } from "react";
import "./App.css";
import { Route, useHistory } from "react-router-dom";
import fire from "firebase";

// Components
import Hero from "./components/Hero/Hero";
import LoginForm from "./components/LoginForm/LoginForm";
import { AuthenticationContext } from "./components/Context/AuthenticationContext";
import SocialFeed from "./components/SocialFeed/SocialFeed";
import UserProfile from "./components/UserProfile/UserProfile";

const App = () => {
  const { setUser } = useContext(AuthenticationContext);
  const history = useHistory();

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        history.push("/socialfeed");
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Hero} />
      <Route path="/signup" component={LoginForm} />
      <Route path="/logout" component={Hero} />
      <Route path="/socialfeed" component={SocialFeed} />
      <Route path="/userprofile" component={UserProfile} />
    </div>
  );
};

export default App;
