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
const getItemNJ = () => {
  return async function (dispatch, useState, {history}){
    await api.get("/posts").then(function(response){
      dispatch(loadItem(response.data));
    })
    
    
  }

}

// export const getItemNJ = () =>
// 	async (dispatch, getState, { history }) => {
// 		try {
// 			const { data } = await api.get("/posts");
// 			dispatch(loadItem(data));
		
// 		} catch (e) {
// 			// console.log(`아티클 조회 오류 발생!${e}`);
// 		}
// 	};

const addItemNJ = ( title, price, targetPrice, textarea, file) => {
  return async function (dispatch, getState, {history}) {
    const form = new FormData()
    form.append('title', title)
    form.append('price', price)
    form.append('targetPrice', targetPrice)
    form.append('content', textarea)
    form.append('thumbnail', file)
    // for (var value of form.values()){
    //   console.log(value)
    // }
    // const file_data = file
    // const reader = new FileReader();
    // console.log(reader.readAsDataURL(file))
    // const newItem = {
    //   title: title,
    //   price: price,
    //   targetPrice: targetPrice,
    //   content: textarea,
    //   thumbnail: file,
      // }
    await api.post("/posts",form).then(function(response){
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
  
}

export {actionCreators};