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
    src: "http://3.35.140.5/gobchang-1639031423467.jpg",
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
    width: 100%;
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