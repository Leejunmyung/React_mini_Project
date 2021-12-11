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
    if(shape === "logo"){
        return (
            <ImageLogo {...styles}></ImageLogo>
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
    height: 80px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position:center;
`
const ImageMedium = styled.div`
    width: 100%;
    height: 175px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position:center;
`
const ImageBig = styled.div`
    width: 600px;
    height: 420px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`

const ImageFull = styled.div`
    width: 100%;
    height:400px; 
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position:center;
`
const ImageLogo = styled.div`
    width: 100%;
    height: 75px;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin:10px 0; 
`



export default Image;