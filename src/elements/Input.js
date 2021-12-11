import React from "react";
import styled from "styled-components";

import { Text,Grid } from ".";



const Input = (props) => {

    const {boxSizing,InputTitle,type,placeholder,label,margin,
       _onChange,padding,textarea, height, value} = props;


    const styles={
        margin:margin,
        padding:padding,
        boxSizing:boxSizing,
        height:height,

    }

    if(InputTitle){
        return(
            <>
                <Text size="16px" align="left" >{label}</Text>
                <InputBox type={type} placeholder={placeholder} value={value} onChange={_onChange} {...styles} />
            </>
           
        );
    }
    if(textarea){
        return (
            <Grid>
                <Text size="16px"  align="left" >{label}</Text>
                <Textarea rows="5" {...styles} type={type} placeholder={placeholder} value={value} onChange={_onChange}></Textarea>
    
                
            </Grid>
        );
    }
    if(label) {
        return(
          <>

          <Text>{label}</Text>
          <InputBox
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            {...styles}
           
          />

        </>
        );
      
    };


    return (
        <InputBox type={type} placeholder={placeholder} onChange={_onChange} value={value} {...styles} />

    );
  };





Input.defaultProps = {
    label:'',
    placeholder:'텍스트',
    type:'text',
    value:'',
    padding:"10px",
    boxSizing:'border-box',
    _onChange:()=>{},
    height:"60px",

   
    
};

const InputBox = styled.input`
    display:block;
    width: 100%;
    height:${(props)=> props.height};
    padding: ${(props)=> props.padding};
    box-sizing: ${(props)=> props.boxSizing};
    border:1px solid #c4c4c4;
    border-radius:4px;
    color:#c4c4c4;
    font-size:17px;
    margin:15px 0;
    font-family: 'Noto Sans KR';
`;

const Textarea = styled.textarea`
width:100%;
padding:10px;
box-sizing:border-box;
font-size:18px;
font-family: 'Noto Sans KR';

`;


export default Input;

