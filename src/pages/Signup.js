import React from "react";
import { Text, Grid, Input, Button } from "../elements";
import {useDispatch} from "react-redux";
import { actionCreators as userActions} from "../redux/modules/user";
import { useSelector } from "react-redux";

const Signup = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState('');
    const [nickName, setnickName] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [pwd_check, setPwdCheck] = React.useState('');

    const id_check = useSelector((state)=>state.user.id_check);
    const nick_check = useSelector((state)=>state.user.nick_check);
    console.log("both_check:", id_check, nick_check);

    const id_conflict = () => {
      dispatch(userActions.id_conflictNJ(id));
      
    };

    const nick_conflict = () => {
      dispatch(userActions.nick_conflictNJ(nickName));     
    };


    const signup = () => {
      if(id === '' || pwd === "" || pwd_check === "" ||nickName === ""){
        window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
        return;
      }
  
      if(pwd !== pwd_check){
        window.alert("비밀번호가 일치하지 않습니다!");
        return;
      }

      if(id_check =="true" && nick_check == "true"){
        window.alert("회원가입 완료!")
        dispatch(userActions.signupNJ(id, nickName, pwd ));
      }else{
        window.alert("아이디 & 닉네임 중복확인을 해주세요")
      }
  
      
    }

    // if(id_check && nick_check){
    //   return(
    //     <Button text="회원가입" _onClick={signup}></Button>
    //   );
    // };

    return (
        <>
      <Grid signWrap>
        <Text size="40px" bold>
          회원가입
        </Text>
        <Grid position="relative" >
            <Button _onClick={id_conflict} position="absolute; right:5px; top:50px" width="80px" text="중복확인"></Button>
            <Input value={id} placeholder="로그인 할 아이디" label="아이디" padding ="5px 0px 5px 10px"
            _onChange={(e) => {setId(e.target.value)}}></Input>
            {id_check == "true" && <Text span size="15px;letter-spacing:-0.5px" color="#00711c">중복확인되었습니다.</Text>}
            {id_check == null && <Text span size="15px;letter-spacing:-0.5px" color="#ff0000">중복체크를 해주세요.</Text>}
            {id_check == "fail" && <Text span size="15px;letter-spacing:-0.5px" color="#ff0000">영문 소문자, 숫자로만 가능합니다.</Text>}
        </Grid>
        <Grid position="relative" >
            <Button _onClick={nick_conflict} position="absolute; right:5px; top:50px" width="80px" text="중복확인"></Button>
            <Input value={nickName} placeholder="두 글자 이상 닉네임" label="닉네임" padding ="5px 0px 5px 10px"
            _onChange={(e) => {setnickName(e.target.value)}}></Input>
            
            {nick_check == "true" && <Text span size="15px;letter-spacing:-0.5px" color="#00711c">중복확인되었습니다.</Text>}
            {nick_check == null && <Text span size="15px;letter-spacing:-0.5px" color="#ff0000">중복체크를 해주세요.</Text>}
            {nick_check == "fail" && <Text span size="15px;letter-spacing:-0.5px" color="#ff0000">영문 소문자, 숫자로만 가능합니다.</Text>}
            
        </Grid>
       
        
        <Input type="password" placeholder="비밀번호(영문,숫자,특수 문자 포함 8자 이상)"  label="비밀번호"
        value={pwd} _onChange={(e) => {setPwd(e.target.value)}}></Input>
        <Input type="password" placeholder="비밀번호 확인"
        value={pwd_check} _onChange={(e) => {setPwdCheck(e.target.value)}} ></Input>
        <Button text="회원가입" _onClick={signup}></Button>
        
      </Grid>
    </>
    );
};

export default Signup;