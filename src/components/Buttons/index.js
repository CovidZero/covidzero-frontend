import React from "react";
import * as styled from './styles.js';

const Buttons = () => {
    return (
      <>
        <div>
          <styled.SmallFilledButton>button</styled.SmallFilledButton>
          <styled.MediumFilledButton>button</styled.MediumFilledButton>
          <styled.LargeFilledButton disabled={true}>button</styled.LargeFilledButton>
        </div>

        <styled.BackgroundDiv>
          <styled.SmallUnfiledButton disabled={false}>button</styled.SmallUnfiledButton>
          <styled.MediumUnfiledButton disabled={false}>button</styled.MediumUnfiledButton>
          <styled.LargeUnfiledButton disabled={true}>button</styled.LargeUnfiledButton>
        </styled.BackgroundDiv>

        <div>
          <styled.TextButton size={16}>button</styled.TextButton>
          <styled.TextButton size={16} disabled={true}>button</styled.TextButton>
        </div>
      </>
    );
  };
  
  export default Buttons;

