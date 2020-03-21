import React from "react";
import { ContainerBox, Input as InputStyle, InputIcon } from '../styles'

const Input = (props) => {
  return (
    <ContainerBox>
      { props.icon && <InputIcon></InputIcon>}
      <InputStyle {...props} />
    </ContainerBox>
  );
};

export default Input;
