import React from 'react';
import { Text,Image, Grid} from "../elements/index";

const Item = (props) => {
  return(
    <>
      <Grid width="auto" >
        <Image shape="medium"/>
        <Text align="left">Title</Text>
        <Text align="left">percent</Text>
      </Grid>
    </>
  );

}

export default Item;