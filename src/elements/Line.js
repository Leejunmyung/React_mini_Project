import React from "react";
import styled from "styled-components";

const Line = (props) => {
  const {width,height,bg,margin} =props;
  const styles={
    width:width,
    height:height,
    bg:bg,
    margin:margin,
  }

  return(
    <>
      <HoriLine {...styles}></HoriLine>
    </>
  );  
}

Line.defaultProps = {
  width:'100%',
  height:'1px',
  bg:'#202020',
  margin:false,
};

const HoriLine = styled.div`
  width:${(props)=> props.width ? `${props.width}`:""};
  height:${(props)=> props.height ? `${props.height}`:""};
  background:${(props)=> props.bg ? `${props.bg}`:""};
  margin:${(props)=> props.margin ? `${props.margin}`:""};
`;

export default Line;