import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {text,_onClick,check_btn, position, width}=props;


    if(check_btn){
        return(
                <BtnCheck position={position} width={width} onClick={_onClick} >
                    {text} 
                </BtnCheck>
        );
    }


    return (
            <BtnSubmit position={position} width={width} onClick={_onClick} >
                {text} 
            </BtnSubmit>    
    );
};

Button.defaultProps={
    text:'텍스트',
    _onClick:()=>{},
    _disabled:()=>{},
    position:'',
    width:"100%",
}


const BtnSubmit = styled.button`
    position: ${(props)=> props.position ? `${props.position}`: " "};
    width: ${(props)=> props.width};
    height:48px;
    background:#c4c4c4;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:17px;
`;

const BtnCheck = styled.button`
    position:${(props)=> props.position ? `${props.position}`:""};
    width: ${(props)=> props.width};
    padding:11px 20px;
    background:#c4c4c4;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:17px;
`;
export default Button;