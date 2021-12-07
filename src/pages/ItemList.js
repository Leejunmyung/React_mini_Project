import React from "react";

import Button from "../elements/Button";
import Input from "../elements/Input";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Item from "../components/Item";
import Rank from "../components/Rank";

const PostList = (props) => {

    return (
        <>
            <Grid> 
                <Image shape="full"/>
            </Grid>
            <Grid contentWrap>
            <Text align="left" size="40px">이 에코펀딩 어때요?</Text>
               <Grid flex="flex">
                   
                  <Grid  flex="flex;flex-wrap:wrap;justify-content:space-between;">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>

                  </Grid>
                  <Grid width="auto">
                     <Rank/>
                     <Rank/>
                     <Rank/>
                     <Rank/>
                     <Rank/>
                  </Grid>

               </Grid>
            </Grid>
        </>
    );
};

export default PostList;
