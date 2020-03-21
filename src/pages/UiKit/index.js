import React from 'react'
<<<<<<< HEAD
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
  
=======
import { ExpandableBox, Input } from './components'
import { Search } from '@styled-icons/evil/Search'

const AllComponents = () => {
  return (
    <div style={{ width: '100%', }} >
      <Input
        placeholder={"Teste placeholder"}
        onChange={(e) => console.log(e.target.value)}
      />
      <br />
      <Input
        icon={<Search color={"white"} size={"24px"} />}
        placeholder={"Exemplo com Icone"}
        onChange={(e) => console.log(e.target.value)}
      />
      <br />
      <Input
        closeIcon
        placeholder={"Exemplo com close Icon"}
        onCloseClick={() => alert("Close clicked")}
        onChange={(e) => console.log(e.target.value)}
      />

      <br />
      <ExpandableBox header={<div>Header works</div>} headerExpaned={<div>Header Expaned works</div>}  body={<div>Body works</div>} />
    </div>
  );
};

export default AllComponents;
>>>>>>> cff839694202eeaa24b87b4227fc896798c162c3
