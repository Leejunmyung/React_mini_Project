import React from "react";
import { Text, Grid, Input, Button } from "../elements";

const Signup = (props) => {

    return (
        <>
      <Grid signWrap>
        <Text size="40px" bold>
          회원가입
        </Text>
        <Grid position="relative" >
          <Input placeholder="로그인 할 아이디" label="아이디"  padding="5px 0 5px 10px"></Input>
            <Button position="absolute; right:5px; top:48px" width="80px" text="중복확인"></Button>
            
            
        </Grid>
        <Grid position="relative" >
        <Input placeholder="두 글자 이상 닉네임" label="닉네임"  padding="5px 0 5px 10px"></Input>
            <Button position="absolute; right:5px; top:48px" width="80px" text="중복확인"></Button>
        </Grid>
       
        
        <Input placeholder="비밀번호(영문,숫자,특수 문자 포함 8자 이상)"  label="비밀번호"></Input>
        <Input placeholder="비밀번호 확인" ></Input>
        <Button text="로그인"></Button>
      </Grid>
    </>
    );
};

export default Signup;