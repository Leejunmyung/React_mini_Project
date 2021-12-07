import React from "react";
import { Text, Grid, Input, Button } from "../elements";
import {useDispatch} from "react-redux";
import { actionCreators as userActions} from "../redux/modules/user";

const Signup = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [pwd_check, setPwdCheck] = React.useState('');
    const [user_name, setUserName] = React.useState('');

    const signup = () => {
      if(id === '' || pwd === "" || pwd_check === "" ||user_name === ""){
        window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
        return;
      }
  
      if(pwd !== pwd_check){
        window.alert("비밀번호가 일치하지 않습니다!");
        return;
      }
  
      dispatch(userActions.signupNJ(id, pwd, user_name));
    }

    return (
        <>
      <Grid signWrap>
        <Text size="40px" bold>
          회원가입
        </Text>
        <Grid position="relative" >
            <Button position="absolute; right:5px; top:48px" width="80px" text="중복확인"></Button>
            <Input placeholder="로그인 할 아이디" label="아이디" padding ="5px 0px 5px 10px"
            _onChange={(e) => {setId(e.target.value)}}></Input>
        </Grid>
        <Grid position="relative" >
            <Button position="absolute; right:5px; top:48px" width="80px" text="중복확인"></Button>
            <Input placeholder="두 글자 이상 닉네임" label="닉네임" padding ="5px 0px 5px 10px"
            _onChange={(e) => {setUserName(e.target.value)}}></Input>
            
        </Grid>
       
        
        <Input type="password" placeholder="비밀번호(영문,숫자,특수 문자 포함 8자 이상)"  label="비밀번호"
        _onChange={(e) => {setPwd(e.target.value)}}></Input>
        <Input type="password" placeholder="비밀번호 확인"
        _onChange={(e) => {setPwdCheck(e.target.value)}} ></Input>
        <Button text="회원가입" _onClick={signup}></Button>
      </Grid>
    </>
    );
};

export default Signup;