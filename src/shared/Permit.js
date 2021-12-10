import React from "react";
import { Grid, Text, Button } from "../elements";

import {useSelector, useDispatch} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {history} from "../redux/configureStore";


const Permit = (props) => {
  const local_token = localStorage.getItem('token');
  return(
    <>
      {props.children}
    </>
  );
}

export default Permit;