import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import api from "../../api/posts";
import axios from 'axios';

//액션 타입

const LOAD_ITEM = "LOAD_ITEM";
const ADD_ITEM ="ADD_ITEM";


const loadItem = createAction(LOAD_ITEM, (item_list)=>({item_list}));
const addItem = createAction(ADD_ITEM, (item)=>({item}));


const initialState = {

  result : [],
}

const initialItem = {
  title:"",
  images:"",
  price:"",
  targetPrice:"",
  content:""

 
}

//미들웨어

const addFundingNJ = (itemId, item_price) => {
  return async function (dispatch, useState, {history}){
    console.log(item_price, itemId)
    await api.put(`/api/item/${itemId}/funding`,item_price).then(function(response){
      console.log("item response",response)
    });
  };
};

const getItemNJ = () => {
  return async function (dispatch, useState, {history}){
    await api.get("/api/item", {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(response){
      console.log(response)
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
  },
  initialState
);


//action creator export
const actionCreators = {
  loadItem,
  addItem,
  addItemNJ,
  getItemNJ,
  addFundingNJ,
  
}

export {actionCreators};