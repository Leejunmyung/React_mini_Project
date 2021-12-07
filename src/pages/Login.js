import React from "react";
import { Text, Input, Grid, Button } from "../elements";
//import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

const Login = (props) => {

  // const [id, setId] = React.useState("");
  // const [pwd, setPwd] = React.useState("");

  const login = () => {
    // setCookie("user_id", "luwa", 3);
    // setCookie("user_pwd", "1234", 3);
  }

  return (
    <>
      <Grid signWrap>
        <Text size="40px" bold>
          로그인
        </Text>
        <Input placeholder="아이디"></Input>
        <Input placeholder="비밀번호(영문,숫자,특수 문자 포함 8자 이상)"></Input>
        <Button text="로그인" _onClick={login}></Button>
      </Grid>
    </>
  );
};

export default Login;
