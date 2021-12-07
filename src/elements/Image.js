import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const {shape, src} = props;

    const styles = {
        src: src,
    }
    
    if(shape === "small"){
        return (
            <ImageSmall {...styles}></ImageSmall>
        );
    };

    if(shape === "medium"){
        return (
            <ImageMedium {...styles}></ImageMedium>
        );
    };

    if(shape === "big"){
        return (
            <ImageBig {...styles}></ImageBig>
        );
    };

    if(shape === "full"){
        return (
            <ImageFull {...styles}></ImageFull>
        );
    };
};

Image.defaultProps = {
    shape: "medium",
    src: "https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    width: "100%",
    height: "170px",
};

const ImageSmall = styled.div`
    width: 150px;
    height: 65px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`
const ImageMedium = styled.div`
    width: 250px;
    height: 175px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`
const ImageBig = styled.div`
    width: 640px;
    height: 355px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`

const ImageFull = styled.div`
    width: 100%;
    height:400px; 
    background-image: url("${(props) => props.src}");
    background-size: cover;
`



export default Image;