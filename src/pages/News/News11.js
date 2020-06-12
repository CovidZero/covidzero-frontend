import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News11 = props => {
  const { id } = props.match.params;

  const [t] = useTranslation();

  return (
    <>
      <Header
        title={t("header.news")}
        leftIcon={ArrowLeft}
        actionLeftIcon={() => history.push("/news")}
        rightIcon={Notification}
      />
      <Content>
        <Title>Seja criativo para anunciar durante o isolamento social</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image" alt="Seja criativo para anunciar durante o isolamento social"
                  src={require("~/assets/images/seja-criativo-para-anunciar-durante-o-isolamento-social.jpg")}
                />
                <div className="news-item-title">Seja criativo para anunciar durante o isolamento social</div>
              </div>
            </Cell>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info">{`Publicado por: Vanessa Lemos`} </div>
            </Cell>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info news-date">{`06/06/2020`}</div>
            </Cell>
          </Row>
        </Grid>
        <SocialShare></SocialShare>
        <Grid>
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-info news-content">

              <p>Desde que o Brasil foi tomado pela crise do novo coronavírus, a criatividade tem sido uma importante aliada para driblar o momento complicado e inovar no mercado. Empresários de todos os ramos têm encontrado novas formas de fazer negócios e divulgá-los para continuar mantendo seu consumidor fiel. Com a mudança de comportamento causada pelo isolamento social, foi preciso redescobrir esse público, entender o que é importante nesse período e entregar ainda mais valor. </p>

              <p>Usar a criatividade sempre foi uma excelente estratégia para superar uma crise. Mas não basta ser criativo, é preciso ter sensibilidade para entender o momento em que o país se encontra e contribuir para minimizar as consequências dessa pandemia. </p>

              <p>A maioria das empresas já entendeu que precisa mudar a forma de agir e lançar novos produtos e serviços adaptados ao atual cenário brasileiro. Mas o que fazer na hora de anunciar essas novidades? Como fazer esse anúncio? </p>

              <p>Pesquisas publicadas pela Kantar revelam que o consumidor ainda mostra interesse por anúncios, mas com certa moderação e cautela. As pessoas estão ficando mais tempo em casa e, consequentemente, vendo mais TV. Isso faz com que os anúncios ainda tenham relevância, porém precisam ser bem pensados. </p>

              <h2>Empresas devem continuar anunciando</h2>
              <p>Segundo os dados encontrados em uma das pesquisas, apenas 8% da população acha que as marcas devem parar de anunciar. É uma informação interessante; porém, levando em conta o nível de produção e criatividade encontrados hoje em dia nos anúncios, faz todo sentido. Os comerciais acabam sendo encarados como mais uma maneira de entretenimento. </p>

              <p>E não é apenas isso, o público acredita que essa continuidade da publicidade cria um ambiente comum ou de possibilidade de retorno a ela. E parte diz, ainda, ser necessária para contribuir com o crescimento da economia, pois é essencial para as empresas sobreviverem e também manterem empregos. </p>

              <h2>Algumas categorias devem reavaliar seus anúncios</h2>
              <p>Consumidores citam que nem todos os nichos de mercado devem anunciar neste período, apenas os que fazem algum sentido dentro das necessidades atuais. Por exemplo, o turismo foi uma das áreas que mais sofreu impacto com o isolamento, então não seria apropriado fazer anúncios de férias ou viagens. </p>

              <p>A pesquisa fala também que itens desnecessários ou considerados de luxo não deveriam ser anunciados agora, pois a maioria das pessoas não está podendo comprar ou optando por esperar a crise passar. Entre os que responderam, 19% acham apropriado que apenas algumas marcas anunciem e concordam que não é hora de fabricantes de papel higiênico, por exemplo, falarem sobre o produto, apesar de ser um item considerado essencial. </p>



              <h2>Anúncios criativos geram impacto positivo e relevância</h2>
              <p>A Skyscanner, plataforma de venda de viagens online, lançou um comercial durante a pandemia que teve uma repercussão muito boa diante dos consumidores. É um anúncio de viagens, porém a criação teve uma sensibilidade ímpar para não apenas vender pacotes ou hotéis, mas esperança. </p>

              <p>Dos espectadores, 75% consideraram a publicidade positiva, humana e sensível ao momento. As pessoas relatam que sentiram esperança de que o mundo voltará ao normal e que seus sonhos de viagens poderão ser realizados. </p>

              <p>Por outro lado, 25% acreditam que foi negativa, já que muitos perderam seus empregos e estão impedidos de viajar a médio e longo prazo. Ou, ainda, acham que não faz sentido anunciar viagens enquanto não se pode viajar. </p>

              <p>Outro case interessante foi do Canal+, um canal de televisão francês. Foi veiculado novamente um anúncio no mês de março deste ano, que havia sido testado em agosto de 2019. O resultado foi uma boa percepção do filme pelo público. O fato de ver idosos, considerados vulneráveis, ao ar livre em um momento de isolamento social não gerou desconforto. O tom de humor do comercial foi tão apreciado agora quanto havia sido em 2019. </p>

              <h2>Ser criativo e sensível para anunciar é o caminho</h2>
              <p>A criatividade é uma das melhores maneiras de driblar a crise, mas cada momento tem suas peculiaridades. A crise da Covid-19 ocorre em uma época em que a tecnologia vem avançando expressivamente no Brasil e no mundo. Isso significa que adaptar serviços e produtos ficou mais simples, mas as pessoas ainda precisam de esperança. </p>

              <p>O que as marcas precisam entender, dentro desse cenário de pandemia, é que a criatividade deve caminhar junto com a empatia. As pessoas querem continuar vendo anúncios, pois acreditam que é necessário como forma de entretenimento e também de impulsionar a economia para voltar à normalidade. Entretanto, essa publicidade precisa conter, antes de tudo, humanidade. </p>

              <p>Fonte: Kantar e YouTube</p>

              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News11;
