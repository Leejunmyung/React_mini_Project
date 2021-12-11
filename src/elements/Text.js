import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const {mont,span,bold, color, size,align, margin,children} = props;

    const styles = {margin:margin, bold: bold, color: color, size:size, align:align};

    if(span){
        return (
            <Span {...styles}>
                {children}
            </Span>
        );
    }

    if(mont){
        return (
            <Mont {...styles}>
                {children}
            </Mont>
        );
    }


    return (
        <P {...styles}>
            {children}
        </P>
    );
    
};

Text.defaultProps = {
    cihldren: null,
    bold: false,
    color: '#222',
    size: '18px',
    align:false,
    margin:false,
    
    

};

const P = styled.p`
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
    text-align:${(props)=> props.align ? `${props.align}`:""};
    margin:${(props)=> props.margin ? `${props.margin}`:""};
    word-break:keep-all;
    letter-spacing:-0.5px;
    font-family: 'Noto Sans KR';
`;

const Mont = styled.p`
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
    text-align:${(props)=> props.align ? `${props.align}`:""};
    margin:${(props)=> props.margin ? `${props.margin}`:""};
    word-break:keep-all;
    letter-spacing:-0.5px;
    font-family: 'Montserrat', sans-serif;
`;

const Span = styled.span`
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
    text-align:${(props)=> props.align ? `${props.align}`:""};
    margin:${(props)=> props.margin ? `${props.margin}`:""};
    
    word-break:keep-all;
    font-family: 'Montserrat', sans-serif;
`;

export default Text;