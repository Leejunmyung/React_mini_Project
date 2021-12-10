import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import api from "../../api/posts";
import axios from 'axios';

//액션 타입

const LOAD_ITEM = "LOAD_ITEM";
const ADD_ITEM ="ADD_ITEM";
const LOAD_RANK="LOAD_RANK";

const loadRank = createAction(LOAD_RANK, (item_list)=>({item_list}));
const loadItem = createAction(LOAD_ITEM, (item_list)=>({item_list}));
const addItem = createAction(ADD_ITEM, (item)=>({item}));


const initialState = {

  result : [],
  rank_item : [],
  rank_index : [1,2,3,4,5],
}

const initialItem = {
  title:"",
  images:"",
  price:"",
  targetPrice:"",
  content:""

 
}

//미들웨어
const getRankNJ = () => {
  return async function (dispatch, useState, {history}){
    await api.get('/api/item/ranking/5').then(function(response){
      console.log("getRankNj: ",response)
      dispatch(loadRank(response));
    })
  }
}

const addFundingNJ = (itemId, item_price) => {
  return async function (dispatch, useState, {history}){
    const token = localStorage.getItem('token')
   
    await api.put(`/api/item/${itemId}/funding`,item_price,
    {
      headers: { 
        Authorization: `Bearer ${token}`,
        itemId: itemId }
    }).then(function(response){
      window.alert("펀딩이 완료되었습니다");
      
    }).catch(err => {
      window.alert(err.response.data.errorMessage)
      history.push('/login');
    });
  };
};

const getItemNJ = () => {
  return async function (dispatch, useState, {history}){
    await api.get("/api/item").then(function(response){
      dispatch(loadItem(response.data.result));
    })
    
    
  }

}


const addItemNJ = ( title, price, targetPrice, textarea, file, file2) => {
  return async function (dispatch, getState, {history}) {
    const form = new FormData()
    const nickname = localStorage.getItem('nickname');
    const token = localStorage.getItem('token');

    form.append('title', title)
    form.append('price', price)
    form.append('targetPrice', targetPrice)
    form.append('content', textarea)
    form.append('thumbnail', file)
    form.append('images', file2 )
    
    
    await api.post("/api/item",form,{
      headers: { Authorization: 
        `Bearer ${token}` }
    }
    ).then(function(response){
      console.log(response)
    }).catch(error => {
      console.log(error.message);
    });
  

  }

}


//reducer
export default handleActions(
  {
    [LOAD_ITEM] : (state, action) => produce(state,(draft) => {
      // console.log(draft, draft.result)
      draft.result = action.payload.item_list;

    }),
    [ADD_ITEM] : (state, action) => produce(state,(draft) => {
      draft.result.unshift(action.payload.item);

    }),
    [LOAD_RANK] : (state, action) => produce(state,(draft) => {
      console.log(action.payload)
      draft.rank_item = action.payload.item_list.data.result

    }),
  },
  initialState
);


//action creator export
const actionCreators = {
  loadRank,
  loadItem,
  addItem,
  addItemNJ,
  getItemNJ,
  addFundingNJ,
  getRankNJ
  
}

export {actionCreators};