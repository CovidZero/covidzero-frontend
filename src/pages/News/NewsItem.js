import React from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";

const NewsItem = props => {
  console.log(props);
  //const { id } = props;

  return (
    <>
      <Grid>
        <Row>
          <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
            <img src={require("~/assets/images/meeting_room.jpg")} />
          </Cell>
        </Row>
      </Grid>

      <Grid>
        <Row>
          <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
            <div className="news-info">{`Publicado por: {AUTHOR}`} </div>
          </Cell>
          <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
            <div className="news-info news-date">{`{DD / MM / YYYY, TIME}`}</div>
          </Cell>
        </Row>
      </Grid>

      <Grid>
        <Row>
          <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
            <div className="news-info news-content">nibh.</div>
          </Cell>
        </Row>
      </Grid>
    </>
  );
};

export default NewsItem;
