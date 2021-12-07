import React from "react";
import { Text, Button, Input, Grid} from "../elements/index";

const CommentList = (props) => {

    return (
        <Grid>
            <Text align="left">닉네임 : nickname</Text>
            <Grid flex="flex; align-items:center; ">
                <Input boxSizing ="content-box" padding ="10px 230px 10px 20px  " type="text" placeholder="댓글 : comment" height="48px"/>
                <Button position="absolute;right:10px;" width="200px" check_btn text="삭제" />
            </Grid>
        </Grid>
    );
};

export default CommentList;
