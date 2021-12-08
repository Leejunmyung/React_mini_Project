import React, { useEffect, useState } from "react";
import {Grid,Image,Text} from '../elements/index';
import { useSelector,  } from "react-redux";
import {history} from '../redux/configureStore';
import api from '../api/items';

import Item from "../components/Item";
import Rank from "../components/Rank";

const ItemList = (props) => {
    const item_list = useSelector((state)=> state.item.result)
    const [itemIdx,setitemIdx]= useState(0);
    const [result,setResult] = useState([{
        idx:"",
        title: "",
        images: "",
        thumbnail:"",
        price:"",
        targetPrice: "",
        content:"",
        totalPrice:""
      }]);

    useEffect(()=>{
        const fetchItem = async () => {
            try{
                const response = await api.get('/result');
                const _inputData = await response.data.map((rowData)=>(
                    setitemIdx(itemIdx+1),
                    {
                        idx: rowData.idx,
                        title: rowData.title,
                        images: rowData.image,
                        thumbnail:rowData.thumbnail,
                        price:rowData.price,
                        targetPrice: rowData.targetPrice,
                        content:rowData.content,
                        totalPrice:rowData.totalPrice
                    }
                ))

                setResult(result.concat(_inputData));
            }catch(e){
                console.error(e.message);
            }
        }
        fetchItem();
    },[]);



    
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
