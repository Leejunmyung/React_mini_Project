import React from "react";
import { Grid, Text, Button } from "../elements";

import {useSelector, useDispatch} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import {history} from "../redux/configureStore";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  if(is_login) {
    return(
      <Grid flex="flex;">
        <Grid align="center">
            <Text size="30px">Eco Funding</Text>
        </Grid>
        <Grid flex="flex" width="1000px">
            <Button width="200px" text="내정보"></Button>
            <Button width="200px" text="로그아웃" _onClick={()=>{
              dispatch(userActions.logOut({}))
            }}></Button>
        </Grid>
    </Grid>
    );
    
  };

  return (
    <Grid flex="flex;">
        <Grid align="center">
            <Text size="30px">Eco Funding</Text>
        </Grid>
        <Grid flex="flex" width="1000px">
            <Button width="200px" text="회원가입"_onClick={()=>{
              history.push("/signup");
            }}></Button>
            <Button width="200px" text="로그인"_onClick={()=>{
              history.push("/login");
            }}></Button>
        </Grid>
    </Grid>
  );
};

export default Header;
