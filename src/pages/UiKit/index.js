import React from 'react'
import { ExpandableBox, Input, Buttons } from './components'

const AllComponents = () => {
    return (
      <>
        <div style={{  width: '100%',}} >
          <Input 
              placeholder={"Teste placeholder"} 
              onChange={(e) => console.log(e.target.value)}    
          />
          <ExpandableBox header={<div>Header works</div>} body={<div>Body works</div>} />
        </div>
        <div>
          <Buttons />
        </div>
      </>
    );
  };
  
  export default AllComponents;
  