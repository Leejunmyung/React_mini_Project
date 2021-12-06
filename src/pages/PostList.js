import React from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";

const PostList = (props) => {

    return (
        <>
            <Button text="회원가입"></Button>
            <Button check_btn text="인증하기" ></Button>
            <Input></Input>
        </>
    );
};

export default PostList;