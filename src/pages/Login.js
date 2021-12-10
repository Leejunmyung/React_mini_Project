import React from "react";
import { Text, Input, Grid, Button } from "../elements";

import {getCookie, setCookie } from "../shared/Cookie";

import {useDispatch} from "react-redux"
import { actionCreators as userActions } from "../redux/modules/user";
import api from "../api/posts";



const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  
  
  const changeId = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  }

  const changePwd = (e) => {
    console.log(e.target.value);
    setPwd(e.target.value);
  }

  const login = () => {
   dispatch(userActions.loginNJ(id, pwd));
   
    
  }

  return (
    <>
      <Grid signWrap>
        <Text size="40px" bold>
          로그인
        </Text>

        <Input value={id} _onChange={changeId} placeholder="아이디"></Input>
        <Input value={pwd} _onChange={changePwd} type="password" placeholder="비밀번호(영문,숫자,특수 문자 포함 8자 이상)"></Input>
        <Button _onClick={() => {
          // console.log("로그인했어!")
          login();
          
        }} text="로그인"></Button>

      </Grid>
    </>
  );
};

export default Login;
