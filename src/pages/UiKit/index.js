import React from 'react'
import Input from './components/Input'

const AllComponents = () => {
    return (
      <div style={{ height: '100vh', width: '100%',}} >
        <Input 
            placeholder={"Teste placeholder"} 
            onChange={(e) => console.log(e.target.value)}    
        />
      </div>
    );
  };
  
  export default AllComponents;
  