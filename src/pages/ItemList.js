import React from "react";
import {Grid,Image,Text} from '../elements/index';
import { useSelector,  } from "react-redux";
import {history} from '../redux/configureStore';


import Item from "../components/Item";
import Rank from "../components/Rank";

const ItemList = (props) => {
    const item_list = useSelector((state)=> state.item.result)



    
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
                       item_list.map((p,idx)=>{
                        return  <Item key={p.id} {...p}  _onClick={()=>{history.push('/item/'+idx)}}/>
                        
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
