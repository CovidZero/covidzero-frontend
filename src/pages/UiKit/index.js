import React from 'react'
import { ExpandableBox, Input, CardStats } from './components'
import { Search } from '@styled-icons/evil/Search'

const AllComponents = () => {
  return (
    <div style={{ width: '100%' }} >
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

      <br />
      <CardStats status="" title={<div>Title</div>} count="{quantity}"/>
      <br />
      <CardStats status="confirmed" title={<div>Confirmados</div>} count="{quantity}"/>
      <br />
      <CardStats status="recovered" title={<div>Recuperados</div>} count="{quantity}"/>
      <br />
      <CardStats status="suspect" title={<div>Suspeitos</div>} count="{quantity}"/>
      <br />
      <CardStats status="death" title={<div>Óbitos</div>} count="{quantity}"/>
      <br/><br/><br/><br/>
    </div>
  );
};

export default AllComponents;
