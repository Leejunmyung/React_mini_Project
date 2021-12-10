import React from "react";
import { Text,Image, Grid} from "../elements/index";
import { useDispatch, useSelector,  } from "react-redux";

const Rank = (props) => {

    const {_onClick} = props;
    return (
        <>
        <Grid flex="flex; align-items:center;justify-content:space-between;" width="380px" margin="0 0 20px 40px" _onClick={_onClick}>
            <Grid>
                <Text size="20px" align="left" margin="0"> {props.title}</Text>
                <Text margin="0 0 0 20px" align="left">{props.percent} %</Text>
            </Grid>
            
                <Image shape="small" margin="0"/>
            
        </Grid>
        </>
    );
};

export default Rank;