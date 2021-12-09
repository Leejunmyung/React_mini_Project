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
    await api.get("/", {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(response){
      console.log(response)
      dispatch(loadItem(response.data.result));
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

const addItemNJ = ( title, price, targetPrice, textarea, file, file2) => {
  return async function (dispatch, getState, {history}) {
    const form = new FormData()
    form.append('title', title)
    form.append('price', price)
    form.append('targetPrice', targetPrice)
    form.append('content', textarea)
    form.append('thumbnail', file)
    form.append('images', file2 )
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
    await api.post("/",form,{
      headers: { Authorization: 
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjE4NmUyNjhlOTg3YzM2NDc1M2FiZCIsImlhdCI6MTYzOTAzNjU3NSwiZXhwIjoxNjM5MTIyOTc1fQ.57Du0UotdNTjUOv_iCI-tY3E4iQ1i99u3x1NhH-1Bjs` }
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
  
}

export {actionCreators};