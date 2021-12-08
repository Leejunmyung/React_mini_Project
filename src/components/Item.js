import React from 'react';
import { Text,Image, Grid} from "../elements/index";
import { useDispatch } from 'react-redux';
import {history} from '../redux/configureStore';
import { actionCreators as itemActions } from '../redux/modules/item';

const Item = (props) => {
  const {_onClick} = props;
  return(
    <>
      <Grid width="250px" _onClick={_onClick} >
        <Image shape="medium" src={props.thumbnail}/>
        <Text align="left" margin="10px 0 0 5px">{props.title}</Text>
        <Text align="left" margin="0 0 10px 5px">{props.percent}%</Text>
      </Grid>
    </>
  );

}

Item.defaultProps = {
  
    title: "[에코펀딩] 첫 번째 리덕스 상품!",
    images: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    thumbnail:"https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price:70000,
    targetPrice: 5000000,
    content:"이 상품을 구매하기 위해서는 많은 분들의 펀딩이 필요합니다!",
    totalPrice:0,
    _onClick:()=>{}
  
}
export default Item;