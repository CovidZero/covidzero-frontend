import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header, CardNews } from "~/components";
import ShareIcon from "~/assets/icons/share.svg";

import * as Styled from "./styles.js";

export default function News() {
  const longContentCardNews =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const [t] = useTranslation();
  return (
    <>
      <Header title={t("header.news")} rightIcon={ShareIcon} />

      <Grid>
        <Row>
          <Cell desktopColumns={12} phoneColumns={4} tabletColumns={4}>
            <Styled.DivTitle>
              <Styled.PageTitle>Últimas notícias </Styled.PageTitle>
              <hr />
            </Styled.DivTitle>
          </Cell>
        </Row>

        <Row>
          <Cell
            desktopColumns={3}
            phoneColumns={4}
            tabletColumns={4}
            onClick={() => history.push("/news/item/1")}
          >
            <CardNews
              title="Como os gestores devem se comportar na crise Coronavírus?"
              content={longContentCardNews}
              date={new Date()}
              tag={<div>MAIN_TAG</div>}
            />
          </Cell>
          <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
            <CardNews
              title="Como os gestores devem se comportar na crise Coronavírus?"
              content={longContentCardNews}
              date={new Date()}
              tag={<div>MAIN_TAG</div>}
            />
          </Cell>
          <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
            <CardNews
              title="Como os gestores devem se comportar na crise Coronavírus?"
              content={longContentCardNews}
              date={new Date()}
              tag={<div>MAIN_TAG</div>}
            />
          </Cell>
          <Cell desktopColumns={3} phoneColumns={4} tabletColumns={4}>
            <CardNews
              title="Como os gestores devem se comportar na crise Coronavírus?"
              content={longContentCardNews}
              date={new Date()}
              tag={<div>MAIN_TAG</div>}
            />
          </Cell>
        </Row>
      </Grid>
    </>
  );
}
