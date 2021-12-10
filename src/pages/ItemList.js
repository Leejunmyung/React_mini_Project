import React, { useEffect, useState } from "react";
import {Grid,Image,Text} from '../elements/index';
import { useDispatch, useSelector,  } from "react-redux";
import {history} from '../redux/configureStore';

import Item from "../components/Item";
import Rank from "../components/Rank";
import api from "../api/posts";

import { actionCreators as itemActions } from "../redux/modules/item";

const ItemList = (props) => {
    const item_list = useSelector((state)=> state.item.result)
    const rank_list = useSelector((state)=> state.item.rank_item)
    const dispatch = useDispatch();

    

    React.useEffect(() => {
        // const Posts = async() => {
        //     const response = await api.get('/result');
        //     console.log(response)
        // }
        // Posts()
        
        if(item_list.length<2){
            dispatch(itemActions.getItemNJ());
        }
        dispatch(itemActions.getRankNJ());

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
                        return  <Item  key={p.id} {...p}  _onClick={()=>{history.push({
                            pathname: `/item/${p.id}`
                        }); window.location.reload();}}/>
                       })
                   }

                  </Grid>
                  <Grid width="auto">
                    {
                        rank_list.map((p,idx)=> {

                            return(
                                <>
                                <Text><b>{idx+1}</b></Text>
                                <Rank key={p.id} {...p}  _onClick={()=>{history.push(`/item/${p.id}`)}}/>
                                </>
                               
                            );
                        })
                    }
                  </Grid>

               </Grid>
            </Grid>
        </>
    );
};

export default ItemList;
