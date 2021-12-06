import React from "react";
import styled from "styled-components";

const Input = (props) => {

    const {InputTitle,type,placeholder,_onChange,value} = props;

    if(InputTitle){
        return(
            <>
                <InputBox type={type} placeholder={placeholder} onChange={_onChange} value={value} />
            </>
           
        );
    }

    return (
        <InputBox type={type} placeholder={placeholder} onChange={_onChange} value={value} />
    );
};

Input.defaultProps = {
    label:'',
    placeholder:'텍스트',
    type:'text',
    value:'',
    
};

const InputBox = styled.input`
    display:block;
    width: 100%;
    height:48px;
    padding:0 16px;
    box-sizing:border-box;
    border:1px solid #c4c4c4;
    border-radius:4px;
    color:#c4c4c4;
    font-size:17px;
`;



export default Input;