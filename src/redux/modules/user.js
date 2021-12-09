import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import api from "../../api/posts";


const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const CHECK_RESULT = "CHECK_RESULT";


const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const ckResult = createAction(CHECK_RESULT, (result) => ({result}));

const initialState = {  
    user: null,
    is_login: false,
};


//미들웨어
const loginNJ = (user) => {
    return function (dispatch, getState, {history}){
        console.log(history);
        dispatch(ckResult(user));
        history.push('/');
    };
};


const signupNJ = (id, nickname, pwd) => {
    return async function (dispatch, getState, {history}){
        console.log(history);
        const userInfo = {
            loginId: id,
            nickname: nickname,
            password: pwd,
        }

        await api.post("/api/auth/signup",userInfo ).then(function(response){
            history.push('/login')
        }).catch((err) => {
            window.alert("!!!!!회원가입 실패!!!!!!")
        })

        
    };
};

const id_conflictNJ = (id) => {
    return async function (dispatch, getState, {history}){

        await api.post("/api/auth/loginid", {'loginId' : id}).then(function(response){
            dispatch(ckResult(response));
        }).catch((err)=> {
            const err_result = err.response.data.result;
            if(err_result === 'false'){
                window.alert("앗!! 중복된 아이디이네요!!")
                dispatch(ckResult(err.response));
            }else if(err_result === 'fail'){
                window.alert("앗!! 형식에 맞지 않는 아이디네요!!")
                dispatch(ckResult(err.response));
            }
        })
    };
};


// 유효성이 실패 fail
// 중복이 실패하면 false

const nick_conflictNJ = (nick) => {
    return async function (dispatch, getState, {history}){
        await api.post("/api/auth/nickname", {'nickname' : nick}).then(function(response){
            dispatch(ckResult(response));
        }).catch((err)=> {
            const err_result = err.response.data.result;
            
            if(err_result === 'false'){
                window.alert("앗!! 중복된 닉네임이네요!!")
                dispatch(ckResult(err.response));
               
            }else if(err_result === 'fail'){
                window.alert('앗!! 형식에 맞지 않는 닉네임이네요!!')
                dispatch(ckResult(err.response));
               
            }
        })
    };
};

export default handleActions(
    {
        [CHECK_RESULT]: (state, action) => 
            produce(state, (draft) => {
                console.log(action.payload, draft)
                // draft.user.push(action.payload.result.data.result);
        }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                deleteCookie("is_login");
                draft.user = null;
                draft.is_login = false;
            }),
        [GET_USER]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
);

const actionCreators = {
    ckResult,
    getUser,
    logOut,
    loginNJ,
    signupNJ,
    id_conflictNJ,
    nick_conflictNJ,
};

export { actionCreators };
