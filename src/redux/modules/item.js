import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import api from "../../api/posts";


//액션 타입

const LOAD_ITEM = "LOAD_ITEM";
const ADD_ITEM ="ADD_ITEM";


const loadItem = createAction(LOAD_ITEM, (item_list)=>({item_list}));
const addItem = createAction(ADD_ITEM, (item)=>({item}));


const initialState = {
  result : [
    {
      title: "1[에코펀딩] 첫 번째 리덕스 상품!",
      images: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
      thumbnail:"https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      price:70000,
      targetPrice: 5000000,
      content:"이 상품을 구매하기 위해서는 많은 분들의 펀딩이 필요합니다!",
      totalPrice:0
    }

  ]
}
//미들웨어

const getItemNJ = (item_list) => {
  return async function (dispatch, getState, {history}) {
    const item_data = await api.get("/result")
    dispatch(loadItem(item_data.data))

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
  getItemNJ,
  
}

export {actionCreators};