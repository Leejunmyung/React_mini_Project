import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/write" exact component={PostWrite} />
        <Route path="/write/:id" exact component={PostWrite} />
        <Route path="/post/:id" exact component={PostDetail} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
