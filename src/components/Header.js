import React from "react";
import { Grid, Text, Button } from "../elements";

const Header = (props) => {
  return (
    <Grid flex="flex;">
        <Grid align="center">
            <Text size="30px">Eco Funding</Text>
        </Grid>
        <Grid flex="flex" width="1000px">
            <Button width="200px"  text="회원가입"></Button>
            <Button width="200px"  text="로그인"></Button>
        </Grid>
    </Grid>
  );
};

export default Header;
