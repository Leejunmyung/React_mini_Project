import React, { useEffect, useState } from "react";
import {Grid,Image,Text} from '../elements/index';
import { useSelector,  } from "react-redux";
import {history} from '../redux/configureStore';

import Item from "../components/Item";
import Rank from "../components/Rank";
import api from "../api/posts";

const ItemList = (props) => {
    const item_list = useSelector((state)=> state.item.result)


    React.useEffect(() => {
        const Posts = async() => {
            const response = await api.get('/posts');
            console.log(response)
        }
        Posts()
    })

    
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
                       item_list.map(rowData =>{
                        return  <Item key={rowData.idx} {...rowData}  _onClick={()=>{history.push(`/item/${rowData.idx}`)}}/>
                        
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
