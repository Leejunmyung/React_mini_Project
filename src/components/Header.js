import React from "react";
import { Grid, Text, Button } from "../elements";

import {useSelector, useDispatch} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {history} from "../redux/configureStore";


const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const user = useSelector((state)=>state.user.nickname);

  if(is_login) {
    return(
      <Grid contentWrap flex="flex;justify-content:space-between;align-items:center;">
        <Grid  width="auto" _onClick={()=>{history.push('/')}}>
            <Text align="left" size="30px">Eco Funding</Text>
        </Grid>
        <Grid  width="auto">
            <Button width="200px" margin="0 10px" text="내정보"></Button>
            <Button width="200px" margin="0 10px" text="펀딩 등록하기" _onClick={()=>{history.push('/write/a');}}></Button>
            <Button width="200px" margin="0 10px" text="로그아웃" _onClick={()=>{
              dispatch(userActions.logOut({}))
            }}></Button>
        </Grid>
    </Grid>
    );
    
  };

  return (
    <Grid contentWrap flex="flex;justify-content:space-between;align-items:center;">
        <Grid width="auto" _onClick={()=>{history.push('/')}}>
            <Text align="left" size="30px">Eco Funding</Text>
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
