import React from "react";
import CommentList from "../components/CommentList";
import {Image, Text, Button, Input, Grid,Line} from "../elements/index";
import { useDispatch, useSelector,  } from "react-redux";
import {history} from '../redux/configureStore';
 
import { actionCreators as itemActions } from "../redux/modules/item";


const PostDetail = (props) => {
    
    const itemId = props.match.params.itemId;
    const dispatch = useDispatch();

    const item_list = useSelector((store)=> store.item.result);
   
    
    const item_idx = item_list.findIndex(p => p.id === itemId);
  
    const item = item_list[item_idx];

    const funding = () => {
        dispatch(itemActions.addFundingNJ(itemId, item.price ))
    };

    React.useEffect(() => {

        if(item){
           return; 
        }
        dispatch(itemActions.getItemNJ(itemId));
    }, []);

    console.log("item_list:",item_list);
    console.log("item_idx:",item_idx, itemId);
    console.log("item:",item);
    
    return (
        <>
            <Image shape="full"></Image>
            <Grid contentWrap>
                <Grid margin="100px 0 0 0" flex="flex">
                    <Image src={"http://" + item.thumbnail} shape="big"></Image>
                    <Grid  width="380px" margin="0 0 0 20px ">
                        <Text size="21px;" align="left" bold >{itemId}. 달성도: %</Text>
                        <Line/>
                        <Text size="21px;" align="left"  >목표 금액: {item.targetPrice} </Text>
                        <Text size="21px;" align="left"  >상품 금액: {item.price}</Text>
                        <Text size="21px;" align="left"  >작성 날짜: {item.date}</Text>

                        <Button text="펀딩하기" _onClick={funding}></Button>
                    </Grid>
                </Grid>

                <Grid margin="60px 0 0 0">
                    <Text size="40px" bold align="left">제목 : {item.title}</Text>
                    <Grid>
                        <Text>
                        {item.content}
                        </Text>
                    </Grid>
                    <Input textarea></Input>
                    <Line margin="30px 0 10px 0 "/>
                    <Grid flex="flex; align-items:center;justify-content:space-between;">
                        <Text align="left" size="20px" bold>프로젝트 스토리<br/>댓글달기</Text>
                        <Button width ="430px" text="글 남기기"></Button>
                    </Grid>
                    <Line margin="10px 0 30px 0 "/>
                </Grid>

                <CommentList />
                <CommentList />
                <CommentList />
                <CommentList />
                <CommentList />
            </Grid>
        </>
    );
};

export default PostDetail;