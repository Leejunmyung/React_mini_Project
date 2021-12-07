import React from "react";
import { Text, Input, Grid, Button } from "../elements";

import { setCookie } from "../shared/Cookie";


const Login = (props) => {

  // const [id, setId] = React.useState("");
  // const [pwd, setPwd] = React.useState("");

  const login = () => {
    // setCookie("user_id", "luwa", 3);
    // setCookie("user_pwd", "1234", 3);
  }

  const changeId = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  }

  const changePwd = (e) => {
    console.log(e.target.value);
    setPwd(e.target.value);
  }

  const login = () => {
    setCookie("user_id", id, 3);
    setCookie("user_pwd", pwd, 3);
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
          console.log("로그인했어!")
          login();
        }} text="로그인"></Button>

      </Grid>
    </>
  );
};

export default Login;
