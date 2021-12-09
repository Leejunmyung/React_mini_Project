import React, { useEffect, useState } from "react";
import {Grid,Image,Text} from '../elements/index';
import { useDispatch, useSelector,  } from "react-redux";
import {history} from '../redux/configureStore';

import Item from "../components/Item";
import Rank from "../components/Rank";
import api from "../api/posts";
import { actionCreators as itemActions } from "../redux/modules/item";
// import { getItemNJ } from "../redux/modules/item";

const ItemList = (props) => {
    const item_list = useSelector((state)=> state.item.result)
    const dispatch = useDispatch();

    console.log(item_list)


    React.useEffect(() => {
        // const Posts = async() => {
        //     const response = await api.get('/result');
        //     console.log(response)
        // }
        // Posts()
        dispatch(itemActions.getItemNJ());
    },[])

    
    return (
        <>
            <Grid> 
                <Image shape="full"/>
            </Grid>
            <Grid contentWrap>
            <Text align="left" size="40px">이 에코펀딩 어때요?</Text>
               <Grid flex="flex">
                   
                  <Grid  flex="flex;flex-wrap:wrap;justify-content:space-between;">
                   {
                       item_list.map((p,idx) =>{
                        return  <Item key={idx} {...p}  _onClick={()=>{history.push(`/item/${idx}`)}}/>
                       })
                   }

                  </Grid>
                  <Grid width="auto">
                     <Rank/>
                     <Rank/>
                     <Rank/>
                     <Rank/>
                     <Rank/>
                  </Grid>

               </Grid>
            </Grid>
        </>
    );
};

export default ItemList;
