import React from "react";
import { Grid, Text, Button,Image } from "../elements";
import "../shared/App.css"
import {useSelector, useDispatch} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {history} from "../redux/configureStore";


const Header = (props) => {
  const dispatch = useDispatch();
  //is_login 필요없으니 나중에 다 지울것 user.js 에서도 필요없음
  // const is_login = useSelector((state) => state.user.is_login);
  // const user = useSelector((state)=>state.user.nickname);
  
  const local_token = localStorage.getItem('token');
  const local_nickname = localStorage.getItem('nickname');

  const item = useSelector((state) => state.item.edit_item.contents);
  const is_edit = item.id? true: false;


  
  if(local_token) {
    return(
      <Grid contentWrap flex="flex;justify-content:space-between;align-items:center;">

        <Grid  width="200px" _onClick={()=>{history.push('/'); window.location.reload("/");}}>
           <Image shape="logo" src="http://3.35.140.5/ecofunding.png"/>
        </Grid>
        <Grid  width="auto" flex="flex;;align-items:center;">
            <Text>{local_nickname}</Text>
            {is_edit?<></>:
            <Button width="200px" margin="0 10px" text="펀딩 등록하기" _onClick={()=>{history.push('/write/a');}}></Button>
            }
            
            <Button width="200px" margin="0 10px" text="로그아웃" _onClick={()=>{
              dispatch(userActions.logOut());
              window.location.reload();
            }}></Button>
        </Grid>
    </Grid>
    );
    
  };

  return (
    <Grid contentWrap flex="flex;justify-content:space-between;align-items:center;">
        <Grid width="200px" _onClick={()=>{history.push('/')}}>
          <Image shape="logo" src="http://3.35.140.5/ecofunding.png"/>
        </Grid>
        <Grid width="auto">
            <Button width="200px" margin="0 10px" text="회원가입"_onClick={()=>{
              history.push("/signup");
            }}></Button>
            <Button width="200px" margin="0 10px" text="로그인"_onClick={()=>{
              history.push("/login");
            }}></Button>
        </Grid>
    </Grid>
  );
};

export default Header;
