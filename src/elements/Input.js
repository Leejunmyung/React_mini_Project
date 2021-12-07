import React from "react";
import styled from "styled-components";

import { Text,Grid } from ".";



const Input = (props) => {
    const {boxSizing,InputTitle,type,placeholder,label,margin, _onChange,padding,textarea} = props;

    const styles={
        margin:margin,
        padding:padding,
        boxSizing:boxSizing,

    }

    if(InputTitle){
        return(
            <>
                <Text size="16px" align="left" >{label}</Text>
                <InputBox type={type} placeholder={placeholder} onChange={_onChange} {...styles} />
            </>
           
        );
    }
    if(textarea){
        return (
            <Grid>
                <Text size="16px"  align="left" >{label}</Text>
                <Textarea rows="10" {...styles} type={type} placeholder={placeholder} onChange={_onChange}></Textarea>
    
                
            </Grid>
        );
    }


    return (
        <InputBox type={type} placeholder={placeholder} onChange={_onChange} {...styles} />

    );
  };

  if(label) {
      return(
        <>
        <Text>{label}</Text>
        <InputBox
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
        />
      </>
      );
    
  };

  return (
    <InputBox
      type={type}
      placeholder={placeholder}
      onChange={_onChange}
      value={value}
    />
  );
};

Input.defaultProps = {

    label:'',
    placeholder:'텍스트',
    type:'text',
    value:'',
    padding:'0 16px',
    boxSizing:'border-box',
   
    
};

const InputBox = styled.input`
    display:block;
    width: 100%;
    height:48px;
    padding: ${(props)=> props.padding};
    box-sizing: ${(props)=> props.boxSizing};
    border:1px solid #c4c4c4;
    border-radius:4px;
    color:#c4c4c4;
    font-size:17px;
    margin:15px 0;
`;

const Textarea = styled.textarea`
width:100%;

`;


export default Input;

