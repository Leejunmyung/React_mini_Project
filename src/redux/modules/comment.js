import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { actionCreators as itemActions } from "./item";
import api from "../../api/posts";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

const LOADING = "LOADING";

const setComment = createAction(SET_COMMENT, (item_id, comment_list) => ({
  item_id,
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (item_id, comment) => ({
  item_id,
  comment,
}));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: {},
  is_loading: false,
};
const addCommentNJ = (itemId, comment) => {
  return async function (dispatch, getState, { history }) {
    const token = localStorage.getItem('token')
    await api.post(`/api/item/${itemId}/comment`, {'comment': comment},{
      headers: { 
        Authorization: `Bearer ${token}`}
    }).then(function(response){
      console.log("addCommentNJ",response)
    })
  };
};
const getCommentNJ = (itemId) => {
  return async function (dispatch, getState, { history }) {
    await api.get(`/api/item/${itemId}/comment`).then(function(response){
      console.log("getCommentNJ",response)
    })
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.item_id] = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.item_id].unshift(action.payload.comment);
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  getCommentNJ,
  addCommentNJ,
  setComment,
  addComment,
};

export { actionCreators };
