import React from "react";
import * as styled from './styles.js';

const Button = (props) => {
    return (
      <>
        {(() => {
            switch(props.styleButton) {
                case "sm-fi-btn":
                    return <styled.SmallFilledButton disabled={props.disable}>{props.textButton}</styled.SmallFilledButton>;
                case "md-fi-btn":
                    return <styled.MediumFilledButton disabled={props.disable}>{props.textButton}</styled.MediumFilledButton>;
                case "lg-fi-btn":
                    return <styled.LargeFilledButton disabled={props.disable}>{props.textButton}</styled.LargeFilledButton>;
                case "sm-un-btn":
                    return <styled.SmallUnfiledButton disabled={props.disable}>{props.textButton}</styled.SmallUnfiledButton>;
                case "md-un-btn":
                  return <styled.MediumUnfiledButton disabled={props.disable}>{props.textButton}</styled.MediumUnfiledButton>;
                case "lg-un-btn":
                  return <styled.LargeUnfiledButton disabled={props.disable}>{props.textButton}</styled.LargeUnfiledButton>;
                case "txt-btn":
                  return <styled.TextButton size={props.sizeBtn} disabled={props.disable}>{props.textButton}</styled.TextButton>;
                default:
                  return<div></div>;
            }
        })()}
      </>
    );
  };
  
  export default Button;