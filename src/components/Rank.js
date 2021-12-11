import React from "react";
import { Text,Image, Grid} from "../elements/index";
import { useDispatch, useSelector,  } from "react-redux";

const Rank = (props) => {

    const {_onClick} = props;
    return (
        <>
        <Grid flex="flex; align-items:flex-start;justify-content:space-between;"  margin="0 0 20px 20px" _onClick={_onClick}>
            <Grid width="80%">
                <Text size="16px" align="left" margin="0"> {props.title}</Text>
                <Text margin="10px 10px 0 0" align="left">{props.percent} %</Text>
            </Grid>
            
                <Image shape="small" margin="0" src={"http://" + props.thumbnail} />
            
        </Grid>
        </>
    );
};

export default Rank;