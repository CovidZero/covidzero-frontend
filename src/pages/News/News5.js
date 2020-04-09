import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News5 = props => {
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
        <Title>Medidas básicas de proteção contra o novo coronavírus</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image"
                  src={require("~/assets/images/medidas_basicas_de_protecao_contra_o_novo_coronavirus.jpg")}
                />
                <div className="news-item-title">Medidas básicas de proteção contra o novo coronavírus</div>
              </div>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info">{`Publicado por: World Health Organization`} </div>
            </Cell>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info news-date">{`18/03/2020`}</div>
            </Cell>
          </Row>
        </Grid>
        <SocialShare></SocialShare>
        <Grid>
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-info news-content">
                <p>Fique atento às últimas informações sobre o surto de COVID-19, disponíveis no site da OMS e através de sua autoridade nacional e local de saúde pública. A maioria das pessoas infectadas experimenta sintomas leves e se recupera, mas pode ser mais grave para outras pessoas. Cuide de sua saúde e proteja os outros fazendo o seguinte: </p>
                <h3><b>Lave as mãos com frequência. </b></h3>
                <p>Limpe regularmente e cuidadosamente as mãos com uma massagem à base de álcool em gel ou lave-as com água e sabão. </p>
                <p><b>Porquê? </b> Lavar as mãos com água e sabão ou usar álcool em gel mata vírus que podem estar em suas mãos. </p>
                <h3><b>Mantenha o distanciamento social</b></h3>
                <p>Mantenha pelo menos 1 metro de distância entre você e qualquer um que esteja tossindo ou espirrando. </p>
                <p><b>Porquê? </b> Quando alguém tosse ou espirra, pulveriza pequenas gotículas líquidas do nariz ou da boca que podem conter vírus. Se você estiver muito perto, você pode respirar essas gotículas, incluindo o vírus COVID-19 se a pessoa que tossir estiver com a doença. </p>
                <h3><b>Evite tocar os olhos, nariz e boca</b></h3>
                <p><b>Porquê? </b> As mãos tocam muitas superfícies e podem pegar vírus. Uma vez contaminadas, as mãos podem transferir o vírus para seus olhos, nariz ou boca. A partir daí, o vírus pode entrar no seu corpo e pode deixá-lo doente. </p>
                <h3><b>Pratique a higiene respiratória</b></h3>
                <p>Certifique-se de que você e as pessoas ao seu redor estejam seguindo uma boa higiene respiratória. Isso significa cobrir a boca e o nariz com o cotovelo ou tecido dobrados quando você tosse ou espirra. Em seguida, elimine o tecido usado imediatamente. </p>
                <p><b>Porquê? </b> Gotículas espalham vírus. Ao seguir uma boa higiene respiratória, você protege as pessoas ao seu redor de vírus como resfriado, gripe e COVID-19. </p>
                <h3><b>Se você tem febre, tosse e dificuldade para respirar, procure atendimento médico o quanto antes</b></h3>
                <p>Fique em casa se não se sentir bem. Se você tiver febre, tosse e dificuldade para respirar, procure atendimento médico e ligue com antecedência. Siga as instruções de sua autoridade de saúde local. </p>
                <p><b>Porquê? </b> As autoridades nacionais e locais terão as informações mais atualizadas sobre a situação em sua área. Ligar com antecedência permitirá que seu agente de saúde o direcione rapidamente para a unidade de saúde certa. Isso também irá protegê-lo e ajudar a prevenir a propagação de vírus e outras infecções. </p>
                <h3><b>Mantenha-se informado e siga os conselhos dados pelo seu agente de saúde</b></h3>
                <p>Mantenha-se informado sobre os últimos desenvolvimentos sobre o COVID-19. Siga os conselhos dados pelo seu agente de saúde, sua autoridade nacional e local de saúde pública ou seu empregador sobre como proteger a si mesmo e outros do COVID-19. </p>
                <p><b>Porquê? </b> As autoridades nacionais e locais terão as informações mais atualizadas sobre se o COVID-19 está se espalhando em sua área. Eles são mais bem posicionados para aconselhar sobre o que as pessoas em sua área devem fazer para se proteger. </p>
                <h3><b>Medidas de proteção para pessoas que estão ou visitaram recentemente (nos últimos 14 dias) áreas onde o COVID-19 está se espalhando</b></h3>
                <p>•	Siga as orientações descritas acima.</p>
                <p>•	Fique em casa se começar a se sentir mal, mesmo com sintomas leves como dor de cabeça e leve coriza, até se recuperar. <b>Porquê? </b> Evitar contato com outras pessoas e visitas a instalações médicas permitirá que essas instalações operem de forma mais eficaz e ajudem a proteger você e outros contra possivelmente o COVID-19 e outros vírus.</p>
                <p>•	Se você desenvolver febre, tosse e dificuldade para respirar, procure orientação médica prontamente, pois isso pode ser devido a uma infecção respiratória ou outra condição grave. Ligue com antecedência e informe seu agente de qualquer viagem recente ou contato com viajantes. <b>Porquê?</b> Ligar com antecedência permitirá que seu provedor de saúde o direcione rapidamente para a unidade de saúde certa. Isso também ajudará a evitar a possível disseminação do COVID-19 e de outros vírus.</p>
                <p>Fonte: <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public?utm_source=covidzero.com.br">World Health Organization</a></p>
              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News5;