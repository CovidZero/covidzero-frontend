import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header } from "~/components";
import ShareIcon from "~/assets/icons/share.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";

const NewsItem = props => {
  const { id } = props.match.params;

  const [t] = useTranslation();

  return (
    <>
      <Header
        title={t("header.news")}
        leftIcon={ArrowLeft}
        actionLeftIcon={() => history.push("/news")}
        rightIcon={ShareIcon}
      />

      <Grid className="news-item-header">
        <Row>
          <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
            <div className="news-item-header-image">
              <img
                className="news-item-image"
                src={require("~/assets/images/meeting_room.jpg")}
              />
              <div className="news-item-title">Centered</div>
            </div>
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
            <div className="news-info news-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et efficitur mauris. Nunc elit lorem, rutrum in vulputate sed,
                convallis ac quam. Nunc dictum ac magna vel porta. Suspendisse
                quis magna at augue faucibus lacinia ut dapibus libero. Cras id
                nibh a urna pharetra scelerisque. Sed nec malesuada magna. Nulla
                neque massa, consectetur nec ipsum sit amet, varius pretium mi.
                Mauris id felis accumsan, pharetra ligula a, viverra ipsum.
                Maecenas eget iaculis nisl. Donec et nibh dapibus, dapibus nisi
                et, aliquet risus. Sed dui nunc, mattis nec porttitor gravida,
                feugiat non lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et efficitur mauris. Nunc elit lorem, rutrum in vulputate sed,
                convallis ac quam. Nunc dictum ac magna vel porta. Suspendisse
                quis magna at augue faucibus lacinia ut dapibus libero. Cras id
                nibh a urna pharetra scelerisque. Sed nec malesuada magna. Nulla
                neque massa, consectetur nec ipsum sit amet, varius pretium mi.
                Mauris id felis accumsan, pharetra ligula a, viverra ipsum.
                Maecenas eget iaculis nisl. Donec et nibh dapibus, dapibus nisi
                et, aliquet risus. Sed dui nunc, mattis nec porttitor gravida,
                feugiat non lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et efficitur mauris. Nunc elit lorem, rutrum in vulputate sed,
                convallis ac quam. Nunc dictum ac magna vel porta. Suspendisse
                quis magna at augue faucibus lacinia ut dapibus libero. Cras id
                nibh a urna pharetra scelerisque. Sed nec malesuada magna. Nulla
                neque massa, consectetur nec ipsum sit amet, varius pretium mi.
                Mauris id felis accumsan, pharetra ligula a, viverra ipsum.
                Maecenas eget iaculis nisl. Donec et nibh dapibus, dapibus nisi
                et, aliquet risus. Sed dui nunc, mattis nec porttitor gravida,
                feugiat non lacus.
              </p>
            </div>
          </Cell>
        </Row>
      </Grid>
    </>
  );
};

export default NewsItem;
