import React from "react";
import {Image, Text, Button, Input, Grid,Line} from "../elements/index";

const PostDetail = (props) => {

    return (
        <>
            <Image shape="full"></Image>
            <Grid contentWrap>
                <Grid margin="100px 0 0 0" flex="flex">
                    <Image shape="big"></Image>
                    <Grid  width="380px" margin="0 0 0 20px ">
                        <Text size="21px;" align="left" bold >달성도: Percent</Text>
                        <Line/>
                        <Text size="21px;" align="left"  >목표 금액: targetPrice</Text>
                        <Text size="21px;" align="left"  >상품 금액: price</Text>
                        <Text size="21px;" align="left"  >작성 날짜: date</Text>

                        <Button text="펀딩하기"></Button>
                    </Grid>
                </Grid>

                <Grid margin="60px 0 0 0">
                    <Text size="40px" bold align="left">제목 : Title</Text>
                    <Input textarea></Input>
                    <Line margin="30px 0 10px 0 "/>
                    <Grid flex="flex; align-items:center;justify-content:space-between;">
                        <Text align="left" size="20px" bold>프로젝트 스토리<br/>댓글달기</Text>
                        <Button width ="430px" text="글 남기기"></Button>
                    </Grid>
                    <Line margin="10px 0 30px 0 "/>
                </Grid>

                <Grid>
                    <Text align="left">닉네임 : nickname</Text>
                     <Grid flex="flex; align-items:center; ">
                        <Input boxSizing ="content-box" padding ="10px 230px 10px 20px  " type="text" placeholder="댓글 : comment"/>
                        <Button position="absolute;right:10px;" width="200px" check_btn text="삭제" />
                     </Grid>
                </Grid>
                <Grid>
                    <Text align="left">닉네임 : nickname</Text>
                     <Grid flex="flex; align-items:center; ">
                        <Input boxSizing ="content-box" padding ="10px 230px 10px 20px  " type="text" placeholder="댓글 : comment"/>
                        <Button position="absolute;right:10px;" width="200px" check_btn text="삭제" />
                     </Grid>
                </Grid>
                <Grid>
                    <Text align="left">닉네임 : nickname</Text>
                     <Grid flex="flex; align-items:center; ">
                        <Input boxSizing ="content-box" padding ="10px 230px 10px 20px  " type="text" placeholder="댓글 : comment"/>
                        <Button position="absolute;right:10px;" width="200px" check_btn text="삭제" />
                     </Grid>
                </Grid>
                <Grid>
                    <Text align="left">닉네임 : nickname</Text>
                     <Grid flex="flex; align-items:center; ">
                        <Input boxSizing ="content-box" padding ="10px 230px 10px 20px  " type="text" placeholder="댓글 : comment"/>
                        <Button position="absolute;right:10px;" width="200px" check_btn text="삭제" />
                     </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default PostDetail;