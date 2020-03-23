import React from "react";
import { Cell, Grid, Row, Column } from "@material/react-layout-grid";
import {
  ExpandableBox,
  Input,
  Button,
  CardStats,
  CardNews,
  ArticleNewsHeader,
  Dots,
  Chips
} from "~/components";

import { Search } from "@styled-icons/evil/Search";
import ImageArticle from '~/assets/images/img-reuniao.jpg'

const AllComponents = () => {
  const longContentCardNews =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    <div style={{ width: "100%" }}>
      <Input
        placeholder={"Teste placeholder"}
        onChange={e => console.log(e.target.value)}
      />
      <br />
      <Input
        icon={<Search color={"white"} size={"24px"} />}
        placeholder={"Exemplo com Icone"}
        onChange={e => console.log(e.target.value)}
      />
      <br />
      <Input
        closeIcon
        placeholder={"Exemplo com close Icon"}
        onCloseClick={() => alert("Close clicked")}
        onChange={e => console.log(e.target.value)}
      />
      <br />
      <ExpandableBox header={<div>Header works</div>} headerExpaned={<div>Header Expaned works</div>}  body={<div>Body works</div>} />

      <br />
      <CardStats title={<div>Title</div>} count="{quantity}"/>
      <br />
      <CardStats status="confirmed" title={<div>Confirmados</div>} count="{quantity}"/>
      <br />
      <CardStats status="recovered" title={<div>Recuperados</div>} count="{quantity}"/>
      <br />
      <CardStats status="suspect" title={<div>Suspeitos</div>} count="{quantity}"/>
      <br />
      <CardStats status="death" title={<div>Óbitos</div>} count="{quantity}"/>
      <br/>
      <CardNews title="Como os gestores devem se comportar na crise Coronavírus?"
                content={longContentCardNews}
                date={new Date()}
                tag={<div>MAIN_TAG</div>} />
      <br/>

      <ArticleNewsHeader source={ImageArticle} title={<div>Como os gestores devem se comportar na crise Coronavírus?</div>}/>
      <br/>
      
      <Grid>
        <Row cols={5}>
            <Dots /> 
            <Dots dot="you"/> 
            <Dots dot="suspect"/> 
            <Dots dot="confirmed"/> 
            <Dots dot="recovered"/> 
        </Row>
      </Grid>

      <br/>

      <Chips text="Default"/>
      <br/>
      <Chips text="Você" type="you"/>
      <br/>
      <Chips text="Suspeitos" type="suspect"/>
      <br/>
      <Chips text="Confirmados" type="confirmed"/>
      <br/>
      <Chips text="Recuperados" type="recovered"/>
      
      <br/><br/><br/><br/>
      <Button styleButton='sm-fi-btn' disable={false} textButton='button' />
      <Button styleButton='md-fi-btn' disable={false} textButton='button' />
      <Button styleButton='lg-fi-btn' disable={true} textButton='button' />
      <br />
      <Button styleButton='sm-un-btn' disable={false} textButton='button' />
      <Button styleButton='md-un-btn' disable={false} textButton='button' />
      <Button styleButton='lg-un-btn' disable={true} textButton='button' />
      <br />
      <Button styleButton='txt-btn' sizeButton={16} disable={false} textButton='button' />
      <Button styleButton='txt-btn' sizeButton={16} disable={true} textButton='button' />
    </div>
  );
};

export default AllComponents;
