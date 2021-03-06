import React from 'react';
import { Text,Image, Grid} from "../elements/index";
import { useDispatch } from 'react-redux';
import {history} from '../redux/configureStore';
import { actionCreators as itemActions } from '../redux/modules/item';

const Item = (props) => {
  const {_onClick} = props;
  console.log(props)
  return(
    <>
      <Grid width="250px" _onClick={_onClick} >
        <Image shape="medium" src={"http://" + props.thumbnail}/>
        <Text align="left" margin="10px 0 0 5px">{props.title}</Text>
        <Text align="left" margin="0 0 10px 5px">{props.percent}%</Text>
      </Grid>
    </>
  );

}

Item.defaultProps = {
  
    title: "[에코펀딩] defaultProps 값입니다!",
    images: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    thumbnail:"http://3.35.140.5/gobchang-1639031423467.jpg",
    price:70000,
    targetPrice: 5000000,
    content:"이 상품을 구매하기 위해서는 많은 분들의 펀딩이 필요합니다!",
    totalPrice:0,
    _onClick:()=>{}
  
}
export default Item;