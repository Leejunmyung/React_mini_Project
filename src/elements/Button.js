import React from "react";
import styled from "styled-components";

const Button = (props) => {

  
    const {position,width,text,_onClick,check_btn,margin}=props;
    const styles={
        position:position,
        width:width,
        margin:margin,
    }

    if(check_btn){
        return(
            <BtnCheck onClick={_onClick} {...styles}>
                {text} 
            </BtnCheck>
        );
    }


    return (
        <BtnSubmit onClick={_onClick} {...styles}>
            {text} 
        </BtnSubmit>    
    );
};

Button.defaultProps={
    position:false,
    width:'100%',
    text:'텍스트',
    margin:"",
    _onClick:()=>{},
    _disabled:()=>{},
    
}


const BtnSubmit = styled.button`
    position: ${(props)=> props.position ? `${props.position}`: " "};
    width: ${(props)=> props.width};
    margin:${(props)=> props.margin};
    height:48px;
    background:#c4c4c4;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:17px;
`;

const BtnCheck = styled.button`
    position : ${(props)=> props.position ? `${props.position}`:""};
    display:inline-block;
    width:${(props) =>props.width};   
    padding:11px 20px;
    background:#c4c4c4;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:17px;
`;
export default Button;