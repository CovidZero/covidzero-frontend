import React from "react";
import { ContainerBox, Input as InputStyle, InputIcon } from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

const Input = (props) => {
  return (
    <ContainerBox>
      {props.icon && <InputIcon>{props.icon}</InputIcon>}
      <InputStyle {...props} />
      {props.closeIcon &&
        <CloseOutline onClick={() => props.onCloseClick && props.onCloseClick()} color={"white"} size={"24px"} />
      }
    </ContainerBox>
  );
};

export default Input;
