import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";

const Input = (props) => {
  const { InputTitle, type, placeholder, _onChange, value, label } = props;

  if (InputTitle) {
    return (
      <>
        <InputBox
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
        />
      </>
    );
  };

  if(label) {
      return(
        <>
        <Text>{label}</Text>
        <InputBox
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
        />
      </>
      );
    
  };

  return (
    <InputBox
      type={type}
      placeholder={placeholder}
      onChange={_onChange}
      value={value}
    />
  );
};

Input.defaultProps = {
  label: "",
  placeholder: "텍스트",
  type: "text",
  value: "",
};

const InputBox = styled.input`
  
  display: block;
  width: 100%;
  height: 60px;
  padding: 10px 16px;
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  color: #c4c4c4;
  font-size: 17px;
  margin: 15px 0px;
`;

export default Input;
