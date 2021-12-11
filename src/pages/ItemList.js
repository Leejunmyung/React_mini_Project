import React, { useEffect, useState } from "react";
import {Grid,Image,Text,Line} from '../elements/index';
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

    },[]);

    
    return (
        <>
            <Grid position="relative;"> 
                <Grid contentWrap >
                    <Grid position="absolute;top:30px;" >
                        <Text size="45px;" color="#fff" bold>Hello,<br/>We are ECO FUNDING GROUP</Text>
                    </Grid>
                </Grid>
                <Image shape="full" src="https://images.unsplash.com/photo-1500314144216-35ed69e42b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </Grid>
            <Grid contentWrap flex="flex;flex-wrap:wrap;justify-content:space-between;">
                <Grid width="800px" margin="0 0 80px 0 ">
                    <Text align="left" size="32px" margin="80px 0 0 0" bold>이 에코펀딩 어때요?</Text>
                
                    <Grid flex="flex" >
                        <Grid  flex="flex;flex-wrap:wrap;justify-content:space-between;">
                            <Grid margin="20px 0 30px 0">
                                <Line height="2px"/>
                            </Grid>
                            {
                                item_list.map((p,idx) =>{
                                return  <Item  key={p.id} {...p}  _onClick={()=>{history.push({
                                    pathname: `/item/${p.id}`
                                }); window.location.reload();}}/>
                                })
                            }

                        </Grid>
                    </Grid>
                </Grid>

                <Grid width="400px">
                    <Text mont align="left" size="32px" margin="86px 0 0 0" bold >RANK</Text>
                
                    <Grid flex="flex" >
                        <Grid  flex="flex;flex-wrap:wrap;justify-content:space-between;">
                            <Grid margin="20px 0 30px 0">
                                <Line height="2px"/>
                            </Grid>
                            {
                                rank_list.map((p,idx)=> {

                                    return(
                                        <Grid flex="flex;" margin="0 0 0 20px">
                                            <Text span size="25px"><b>{idx+1}.</b></Text>
                                            <Rank key={p.id} {...p}  _onClick={()=>{history.push(`/item/${p.id}`)}}/>
                                        </Grid>
                                        
                                    );
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
};

export default ItemList;
