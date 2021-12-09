import React from "react";
import {Input, Text, Button,Grid} from '../elements/index';
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { actionCreators as itemActions } from "../redux/modules/item";

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const fileInput = React.useRef();
    const fileInput2 = React.useRef();
    const [title, setTitles] = React.useState("");
    const [price, setPrices] = React.useState("");
    const [targetPrice, settargetPrice] = React.useState("");
    const [textarea, setTexts] = React.useState("");

    const change_title = (e) => {
        setTitles(e.target.value);
    }
    const change_price = (e) => {
        setPrices(e.target.value);
    }
    const change_goal = (e) => {
        settargetPrice(e.target.value);
    }
    const change_text = (e) => {
        setTexts(e.target.value);
    }
    
    /////////
    const selectFile = (e) => { 
        console.log(e);
        console.log(e.target.files);   
        console.log(e.target.files[0]);
    
        console.log(fileInput.current.files[0]);
    
        const reader = new FileReader();
        const file = fileInput.current.files[0];
    
        reader.readAsDataURL(file);
    
        console.log(reader.result);
      };
      const selectFile2 = (e) => { 
        console.log(e);
        console.log(e.target.files);   
        console.log(e.target.files[0]);
    
        console.log(fileInput.current.files[0]);
    
        const reader = new FileReader();
        const file = fileInput.current.files[0];
    
        reader.readAsDataURL(file);
    
        console.log(reader.result);
      };



    //////

        const addItem = () => {
            console.log("게시글 작성버튼 누름!")
            
            dispatch(itemActions.addItemNJ(title, price, targetPrice, textarea, fileInput.current.files[0], fileInput2.current.files[0]));
            
        }
    
   
    

    return (

        
        <>
          <Grid contentWrap>
            <Grid _onClick={()=>{history.push("/");}}>
                <Text size="40px" bold >
                    Logo
                </Text>
            </Grid>

            
            <Text  align="left" size="20px" bold >
                nickname님!<br/>
                새로운 프로젝트를 소개해보세요.
            </Text>

            <Grid>
                <Input value={title} _onChange={change_title} InputTitle label="프로젝트 제목*" placeholder="프로젝트 제목을 입력하세요." margin="40px 0 0 0"></Input>
                <Input value={price} _onChange={change_price} InputTitle label="상품 금액*" placeholder="하나의 상품 금액을 입력하세요."  margin="40px 0 0 0"></Input>
                <Input value={targetPrice} _onChange={change_goal} InputTitle label="목표 금액*" placeholder="상품금액 10배이상을 지정해주세요." margin="40px 0 0 0"></Input>
                <input ref={fileInput} type="file" onChange={selectFile}/>
                <input ref={fileInput2} type="file" onChange={selectFile2}/>
                <Input value={textarea} _onChange={change_text} textarea label="프로젝트 상세 내용*" placeholder="프로젝트 상세 내용을 입력하세요." margin="40px 0 15px 0"></Input>
                
                <Button text="등록하기" _onClick={()=>{
                    addItem();
                    history.push('/');
                    }}></Button>
            </Grid>
            
          </Grid>
        </>
    );
};

export default PostWrite;