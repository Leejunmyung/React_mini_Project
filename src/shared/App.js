import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/write" exact component={PostWrite} />
        <Route path="/write/:itemId" exact component={PostWrite} />
        <Route path="/item/:itemId" exact component={PostDetail} />
      </Switch>
    </>
  );
}

export default App;
