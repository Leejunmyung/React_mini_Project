import React from "react";
import {Input, Text, Button,Grid} from '../elements/index';
import { useHistory } from "react-router";

const PostWrite = (props) => {
    const history = useHistory();

    return (
        <>
          <Grid contentWrap>
            <Grid _onClick={()=>{history.push("/");}}>
                <Text size="40px" bold >
                    Logo
                </Text>
            </Grid>

            
            <Text  align="left" size="20px"bold >
                nickname님!<br/>
                새로운 프로젝트를 소개해보세요.
            </Text>

            <Grid>
                <Input InputTitle label="프로젝트 제목*" placeholder="프로젝트 제목을 입력하세요." margin="40px 0 0 0"></Input>
                <Input InputTitle label="목표 금액*" placeholder="프로젝트 성공을 위한 목표 금액을 입력하세요." margin="40px 0 0 0"></Input>
                <Input InputTitle label="상품 금액*" placeholder="하나의 상품 금액을 입력하세요."  margin="40px 0 0 0"></Input>
                <Input type="file" InputTitle label="상품 이미지 등록*" placeholder="이미지 파일" margin="40px 0 0 0"></Input>
                <Input textarea label="프로젝트 상세 내용*" placeholder="프로젝트 상세 내용을 입력하세요." margin="40px 0 15px 0"></Input>
                
                <Button text="등록하기" _onClick={()=>{history.push('/')}}></Button>
            </Grid>
            
          </Grid>
        </>
    );
};

export default PostWrite;