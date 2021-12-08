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
// const getItemNJ = (item_list) => {
//   return async function (dispatch, useState, {history}){
//     const item_list = await api.get("/result");
//     dispatch(loadItem(item_list.data));
    
//   }

// }

export const getItemNJ = () =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await api.get("/posts");
			dispatch(loadItem(data));
		
		} catch (e) {
			// console.log(`아티클 조회 오류 발생!${e}`);
		}
	};

const addItemNJ = ( title, price, targetPrice, textarea, file) => {
  return async function (dispatch, getState, {history}) {
    const newItem = {
      title: title,
      price: price,
      targetPrice: targetPrice,
      content: textarea,
      thumbnail: file,
      

    }
    console.log("얜가",newItem)

    await axios.post("http://localhost:3001/posts",newItem).then(function(response){
      console.log(response)
    }).catch(error => {
      console.log(error.message);
    });
    // const postItem = await api.post("/result", newItem);
    
    // postItem.then(function (response) {
    //   console.log(response)
    // })
    // dispatch(addItem({item_data}));
    // console.log("얜가",item)
    
    // await api.post("/result", item).then(function (response){
    //   console.log("response: ",response)
    // })

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