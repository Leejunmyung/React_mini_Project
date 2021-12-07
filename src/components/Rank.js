import React from "react";
import { Text,Image, Grid} from "../elements/index";

const Rank = (props) => {

    return (
        <>
        <Grid flex="flex; align-items:center;justify-content:space-between;" width="380px" margin="0 0 20px 40px">
            <Grid>
                <Text size="20px" align="left" margin="0"><b>1.</b> Title</Text>
                <Text margin="0 0 0 20px" align="left">Percent %</Text>
            </Grid>
            
                <Image shape="small" margin="0"/>
            
        </Grid>
        </>
    );
};

export default Rank;