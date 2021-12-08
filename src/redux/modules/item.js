import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import api from "../../api/posts";

//액션 타입

const LOAD_ITEM = "LOAD_ITEM";
const ADD_ITEM ="ADD_ITEM";


const loadItem = createAction(LOAD_ITEM, (item_list)=>({item_list}));
const addItem = createAction(ADD_ITEM, (item)=>({item}));


const initialState = {

  result : [],
}

//미들웨어
const getItemNJ = (item_list) => {
  return async function (dispatch, useState, {history}){
    const item_list = await api.get("/result");
    dispatch(loadItem(item_list.data));
    
  }

}

const addItemNJ = (item ) => {
  return async function (dispatch, getState, {history}) {
    
    const item_data = await api.post("/result", item)
    dispatch(addItem(item_data))
  }

}


//reducer
export default handleActions(
  {
    [LOAD_ITEM] : (state, action) => produce(state,(draft) => {
      draft.result.push(...action.payload.item_list);

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
  
}

export {actionCreators};