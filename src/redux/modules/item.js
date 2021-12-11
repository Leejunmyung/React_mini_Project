import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import api from "../../api/posts";
import axios from 'axios';

//액션 타입

const LOAD_ITEM = "LOAD_ITEM";
const ADD_ITEM ="ADD_ITEM";
const ONE_ITEM = "ONE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const LOAD_RANK="LOAD_RANK";
const EDIT_ITEM = "EDIT_ITEM";

const loadRank = createAction(LOAD_RANK, (item_list)=>({item_list}));
const loadItem = createAction(LOAD_ITEM, (item_list)=>({item_list}));
const oneItem = createAction(ONE_ITEM, (item)=>({item}));
const addItem = createAction(ADD_ITEM, (item)=>({item}));
const editItem = createAction(EDIT_ITEM, (item_id, contents)=>({item_id, contents}));



const initialState = {

  result : [],
  rank_item : [],
  edit_item : {contents:{id:false}},
  one_item : [],
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

const getOneItemNJ = (itemId) => {
  return async function (dispatch, useState, {history}){
    await api.get(`/api/item/${itemId}`).then(function(response){
      // console.log(response.data.result);
      dispatch(oneItem(response.data.result));
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
      history.push('/');
      window.location.reload();
    }).catch(error => {
      console.log(error.message);
    });
  

  }

}

const editItemNJ = (itemId,title, textarea, file, file2) => {
  return async function (dispatch, getState, {history}) {
    const form = new FormData()
    const token = localStorage.getItem('token');

    form.append('title', title)
    form.append('content', textarea)
    form.append('thumbnail', file)
    form.append('images', file2 )
    
    
    await api.put(`/api/item/${itemId}`,form,
    {
      headers: { Authorization: 
        `Bearer ${token}` }
    }
    ).then(function(response){
      history.push('/');
      window.location.reload('/');
    })
  }
}

const deleteItemNJ = (itemId) => {
  return async function (dispatch, getState, {history}) {
    const token = localStorage.getItem('token');
    await api.delete(`/api/item/${itemId}`,
    {
      headers: { Authorization: 
        `Bearer ${token}` }
    }
    ).then(function(response){
      window.alert("삭제 완료되었습니다.");
      window.location.href="/";
    })
  }
}

//reducer
export default handleActions(
  {
    [LOAD_ITEM] : (state, action) => produce(state,(draft) => {
      // console.log(draft, draft.result)
      draft.result = action.payload.item_list;

    }),
    [ONE_ITEM] : (state, action) => produce(state,(draft) => {
      // console.log("제바아아아ㅏ라",action.payload, draft)
      console.log(action.payload)
      draft.one_item = action.payload.item
      

    }),
    [ADD_ITEM] : (state, action) => produce(state,(draft) => {
      draft.result.unshift(action.payload.item);

    }),
    [EDIT_ITEM] : (state, action) => produce(state,(draft) => {
      
      draft.edit_item = action.payload

    }),
    [DELETE_ITEM] : (state, action) => produce(state,(draft) => {
      
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
  oneItem,
  getOneItemNJ,
  editItem,
  addItemNJ,
  editItemNJ,
  deleteItemNJ,
  getItemNJ,
  addFundingNJ,
  getRankNJ
  
}

export {actionCreators};