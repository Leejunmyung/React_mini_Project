import React from "react";
import {Input, Text, Button,Grid} from '../elements/index';
import { useHistory } from "react-router";
import { useDispatch,useSelector } from "react-redux";
import { actionCreators as itemActions } from "../redux/modules/item";


const PostWrite = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
   
    

    const item = useSelector((state) => state.item.edit_item.contents);
    
    const is_edit = item.id? true: false;
    const _item = is_edit? item : null;

    const fileInput = React.useRef(_item? _item.thumbnail : "");
    const fileInput2 = React.useRef(_item? _item.images[0] : "");
    const [title, setTitles] = React.useState(_item? _item.title : "");
    const [price, setPrices] = React.useState("");
    const [targetPrice, settargetPrice] = React.useState("");
    const [textarea, setTexts] = React.useState(_item? _item.content : "");
    console.log(item, fileInput, fileInput2)
    
    // console.log(item)
    // const [filevalue1, setFile] = React.useState("");
    // const [filevalue2, setF] = React.useState("");
    const editItem = () => {
        dispatch(itemActions.editItemNJ(item.id, title, textarea, fileInput.current.files[0], fileInput2.current.files[0]))
        
    }
    


    
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
    
    ///////파일 등록
    const selectFile = (e) => { 
        // console.log(e);
        // console.log(e.target.files);   
        // console.log(e.target.files[0]);
       // console.log(fileInput.current.files[0]);
    
        const reader = new FileReader();
        const file = fileInput.current.files[0];
    
        reader.readAsDataURL(file);
    
      };

      const selectFile2 = (e) => { 
    
        const reader = new FileReader();
        const file = fileInput.current.files[0];
    
        reader.readAsDataURL(file);

      };


    //////

        const addItem = () => {
            
            
            const fileCheck = document.getElementById('bfile').value;
            const fileCheck2 = document.getElementById('bfile2').value;

            if(title == '' || price == '' || targetPrice == '' || textarea == '' ){
                // console.log(fileInput)
                window.alert("게시물을 다 넣어주세요!")

                return;
                
            }else if(!fileCheck || !fileCheck2){
                window.alert('사진을 첨부해주세요')
                return;
            }
            dispatch(itemActions.addItemNJ(title, price, targetPrice, textarea, fileInput.current.files[0], fileInput2.current.files[0]));
                history.push('/');
                window.location.reload();
            
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
                {}님!<br/>
                {
                is_edit ?
               "프로젝트 수정 페이지 입니다.": "새로운 프로젝트를 소개해보세요."
                }
            </Text>

            <Grid>
                <Input value={title} _onChange={change_title} InputTitle label="프로젝트 제목*" placeholder="프로젝트 제목을 입력하세요." margin="40px 0 0 0"></Input>
                <Input type ="number" value={price} _onChange={change_price} InputTitle label="상품 금액*" placeholder="하나의 상품 금액을 입력하세요."  margin="40px 0 0 0"></Input>
                <Input type ="number" value={targetPrice} _onChange={change_goal} InputTitle label="목표 금액*" placeholder="상품금액 10배이상을 지정해주세요." margin="40px 0 0 0"></Input>
                <input ref={fileInput}  id="bfile"  type="file" onChange={selectFile}/>
                <input ref={fileInput2} id='bfile2'  type="file" onChange={selectFile2}/>
                <Input value={textarea} _onChange={change_text} textarea label="프로젝트 상세 내용*" placeholder="프로젝트 상세 내용을 입력하세요." margin="40px 0 15px 0"></Input>
                
                {
                    is_edit ?  (<Button text="수정하기" _onClick={()=>{ editItem()}}></Button>) : (<Button text="등록하기" _onClick={()=>{ addItem()}}></Button>)
                    
                }


               
            </Grid>
            
          </Grid>
        </>
    );
};

export default PostWrite;