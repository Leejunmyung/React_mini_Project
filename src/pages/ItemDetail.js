import React from "react";
import CommentList from "../components/CommentList";
import {Image, Text, Button, Input, Grid,Line} from "../elements/index";
import { useDispatch, useSelector,  } from "react-redux";
import {history} from '../redux/configureStore';
 
import { actionCreators as itemActions } from "../redux/modules/item";
import { actionCreators as commentActions } from "../redux/modules/comment";


const PostDetail = (props) => {

    const comment_list = useSelector((state)=> state.comment.comment_list);
    
    const itemId = props.match.params.itemId;
    const dispatch = useDispatch();

    // const item_list = useSelector((store)=> store.item.result);
    // const item_idx = item_list.findIndex(p => p.id === itemId);
    const item = useSelector((store)=> store.item.one_item);
    console.log(item)
    const local_token = localStorage.getItem('token');
    const local_nickname = localStorage.getItem('nickname');


    const funding = () => {
        dispatch(itemActions.addFundingNJ(itemId, item.price ))
    };

    //댓글 작성하기
    const [commentText,setComment] = React.useState('');

    const onComment = (e) => {
        setComment(e.target.value);
    }

    //addComment  버튼
    const addComment = () => {

        if(local_token){
            //댓글 dispatch
            dispatch(commentActions.addCommentNJ(itemId,commentText));
            window.location.reload(`/item/:${itemId}`)
            // dispatch(commentActions.addCommentNJ());
        }else{
            window.alert('로그인이 필요합니다.');
            history.push('/login');
        }
    }

    const deleteItem = () => {
        // dispatch(itemActions.getOneItemNJ(itemId));
        dispatch(itemActions.deleteItemNJ(itemId));
       
    }
    const editItem = () => {
        dispatch(itemActions.editItem(itemId, item));
        history.push(`/write/${itemId}`);
        // console.log(item);
       
    }

    React.useEffect(() => {

        dispatch(itemActions.getOneItemNJ(itemId));
        dispatch(commentActions.getCommentNJ(itemId));
    }, []);

    // console.log("item_list:",item_list);
    // console.log("item_idx:",item_idx, itemId);
    // console.log("item:",item);
    
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
                        {
                            local_token && local_nickname == item.nickname &&
                            <>
                            <Button text="수정하기" _onClick={editItem}></Button>
                            <Button text="삭제하기" _onClick={deleteItem}></Button>
                            </>
                        }
                    </Grid>
                </Grid> 

                <Grid margin="60px 0 0 0">
                    <Text size="40px" bold align="left">제목 : {item.title}</Text>
                    <Grid>
                        
                        <Text>
                        {item.content}
                        </Text>

                    </Grid>
                    
                    <Line margin="30px 0 10px 0 "/>
                    <Grid flex="flex; align-items:center;justify-content:space-between;">
                        <Text align="left" size="20px" bold>프로젝트 스토리<br/>댓글달기</Text>
                        <Button width ="430px" text="글 남기기" _onClick={addComment} ></Button>

                       
                    </Grid>
                    {
                        local_token && 
                        <Grid> 
                            <Input textarea value={commentText} _onChange={onComment}></Input>
                       </Grid>
                    }
                    
                    <Line margin="10px 0 30px 0 "/>
                </Grid>

                {
                    comment_list.map((p,idx) => {
                        return (
                            <>
                            <Grid>
                                <Text align="left">{p.nickname} </Text>
                                <Grid flex="flex; align-items:center; ">

                                    {/* <Input boxSizing ="content-box" padding ="10px 230px 10px 20px  " type="text" placeholder="댓글 : comment" height="48px"/>
                                    */}
                                    <Text>{p.comment}</Text>
                                    <Button position="absolute;right:10px;" width="200px" check_btn text="삭제" />
                                </Grid>
                            </Grid>
                        </>
                        );
                    })
                }
      
            </Grid>
        </>
    );
};

export default PostDetail;