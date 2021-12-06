import React from "react";

import Button from "../elements/Button";
import Input from "../elements/Input";

import Image from "../elements/Image";
import Text from "../elements/Text";


const PostList = (props) => {

    return (

        <>
            <Button text="회원가입"></Button>
            <Button check_btn text="인증하기" ></Button>
            <Input></Input>

            메인페이지다!
            <Image shape="big"></Image>
            <Text bold>하하하하하하</Text>
            
        </>

    );
};

export default PostList;