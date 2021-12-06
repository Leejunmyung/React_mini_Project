import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {text,_onClick,check_btn}=props;


    if(check_btn){
        return(
                <BtnCheck onClick={_onClick} >
                    {text} 
                </BtnCheck>
        );
    }


    return (
            <BtnSubmit onClick={_onClick} >
                {text} 
            </BtnSubmit>    
    );
};

Button.defaultProps={
    text:'텍스트',
    _onClick:()=>{},
    _disabled:()=>{},
}


const BtnSubmit = styled.button`

    display:block;
    width: 100%;
    height:48px;
    background:#c4c4c4;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:17px;
`;

const BtnCheck = styled.button`
    display:inline-block;
    
    padding:11px 20px;
    background:#c4c4c4;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:17px;
`;
export default Button;