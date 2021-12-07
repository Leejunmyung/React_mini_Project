import React from "react";

import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";

import ItemList from "../pages/ItemList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ItemWrite from "../pages/ItemWrite";
import ItemDetail from "../pages/ItemDetail";

import "./App.css";

function App() {
  return (
    <><Header></Header>
      <Switch>
        <Route path="/" exact component={ItemList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/write" exact component={ItemWrite} />
        <Route path="/write/:itemId" exact component={ItemWrite} />
        <Route path="/item/:itemId" exact component={ItemDetail} />
      </Switch>
    </>
  );
}

export default App;
