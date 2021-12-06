import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {bold, color, size,align, margin,children} = props;

    const styles = {margin:margin, bold: bold, color: color, size:size, align:align};
    return (
        <P {...styles}>
            {children}
        </P>
    );
};

Text.defaultProps = {
    cihldren: null,
    bold: false,
    color: '#222831',
    size: '18px',
    align:false,
    margin:false,
};

const P = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
    text-align:${(props)=> props.align ? `${props.align}`:""};
    margin:${(props)=> props.margin ? `${props.margin}`:""};
`;

export default Text;