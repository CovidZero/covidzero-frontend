import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News8 = props => {
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
        <Title>As mudanças nas relações de consumo durante a pandemia</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image"
                  src={require("~/assets/images/as-mudancas-nas-relacoes-de-consumo-durante-a-pandemia.jpg")}
                />
                <div className="news-item-title">As mudanças nas relações de consumo durante a pandemia</div>
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
              <p>A pandemia é uma realidade e já estamos vivendo nela há algum tempo. Sabemos que muita coisa mudou e estamos todos tentando nos adaptar. Por sorte, o homem é um ser adaptável. Mas de que maneira estamos fazendo isso e como o novo coronavírus (COVID-19) está nos afetando e, mais, qual o impacto que esse episódio da história deixará nas nossas vidas? </p>

              <p>Estamos experimentando uma nova maneira de fazer as coisas, o trabalho virou Home Office, a comunicação é totalmente virtual, o ensino se tornou, obrigatoriamente, a distância e o consumo mudou seu foco. O que costumávamos comprar há alguns meses perdeu sua importância e, consequentemente, esse nicho de mercado está em queda. </p>

              <p>Mas o brasileiro é otimista e, apesar de acreditar que a vida não voltará ao normal, os economistas afirmam que o país irá se recuperar. O normal, diga-se de passagem, está assumindo novas formas, ou seja, hoje vivemos também em uma normalidade que é diferente da de ontem e que alguns estão chamando de “novo normal”. </p>

              <p>Pensando agora em consumo, existem algumas mudanças que irão moldar nossas respostas imediatas e também novas realidades. Como as marcas precisam agir nesse momento e o que o consumidor espera delas. </p>

              <h2>As marcas que são significativas para mim precisam ter um impacto social para todos</h2>

              <p>Não foi a pandemia que trouxe esse novo olhar do consumidor sobre as marcas, o Marketing 5.0 já fala sobre apoiar causas justas e de responsabilidade social, e a maioria das empresas já entendeu isso. O que ocorre agora é que as pessoas estão cobrando esse viés social das suas marcas preferidas e dando valor àquelas que seguem essa diretriz. </p>

              <p>Segundo pesquisa realizada pela Kantar no final de março, essa expectativa dos consumidores em relação às marcas já mudou. Eles começaram a esperar delas mais preocupação com o social. Então, veja, implantar soluções que criem um papel relevante e significativo na sociedade, proporcionando respostas às questões que afligem a população neste isolamento social é a chave. </p>

              <p>Uma outra coisa que é preciso pensar é que, quando tudo isso passar, as expectativas criadas agora e que foram atendidas, em sua maioria, continuam no radar. Dificilmente o que era prioridade antes dessa crise global permanecerá sendo, mas sim o que ocorrer durante ela. </p>

              <h2>O e-commerce está crescendo e veio para ficar</h2>
              <p>Já estava em crescimento e a pandemia só potencializou esse processo. O que antes parecia supérfluo e, comumente, mais caro, hoje se tornou normal. Lojas, restaurantes, supermercados, todos tiveram que aderir ao e-commerce ou ampliar o serviço. </p>

              <p>Muitas pessoas compraram na Internet pela primeira vez durante o isolamento social. Dentro do universo pesquisado pela Kantar, de 501 pessoas acima de 18 anos, 17% compraram alimentos e bebidas na Internet pela primeira vez e 15% compraram remédios sem prescrição médica. Esses dados nos mostram que a confiança no e-commerce também aumentou, mesmo que tenha sido por uma necessidade dos novos tempos. </p>

              <p>Rapidez e agilidade devem caminhar juntas durante esse período, é preciso correr para garantir a disponibilidade de estoque, facilidade no processo de compra e entrega rápida. Estratégias para aumentar a visibilidade, neste momento, nos canais digitais é um ponto chave para sair na frente. O Carrefour, por exemplo, viu suas vendas pela Internet triplicarem com o coronavírus por conta das decisões assertivas que tomou no final de março. </p>

              <h2>A Era do Self dá lugar à Era da Humanidade Conectada </h2>

              <p>Uma das inúmeras mudanças que vêm ocorrendo nos últimos meses é em relação à humanidade das pessoas. A Internet, que antes era marcada pela autoimagem e individualismo, caracterizada por uma modernidade líquida, como disse Bauman, vive agora a era da conexão. O ser humano é um ser gregário, social e sente necessidade de socializar com outros seres humanos. </p>

              <p>Valores estão sendo amplificados e as dificuldades enfrentadas durante a crise, como isolamento, escassez e insegurança estão dando lugar à cooperação, generosidade, bem-estar e simplicidade. Podemos dizer que os grupos sociais voltam a experimentar o sentimento de comunidade e colaboração mútua. </p>

              <p>A Kantar mostra que 77% dos brasileiros consideram a perda da liberdade como o aspecto mais difícil de se enfrentar durante a crise. Algo que buscam compensar focando no desenvolvimento pessoal e cuidando da saúde mental, pelo menos 35% das pessoas acreditam ser esse o melhor caminho. </p>

              <p>Se a palavra de ordem é conexão, o que as marcas devem pensar agora é como alinhar esses valores com suas ações. Seja facilitando essas formas de se conectar ou amplificando ainda mais esse sentimento de generosidade e levando ações de bondade e alegria de maneira criativa. </p>

              <h2>O que está transformando a vida cotidiana é a disrupção </h2>

              <p>Ficar em casa hoje em dia é diferente do que era há 30 anos ou há 3 meses. Mas o que não muda é a vontade de se distrair, todos buscam por formas de entretenimento e, numa cena de pandemia onde todos estão isolados, ganha quem for mais criativo. </p>

              <p>O importante aqui é inovar e melhorar os canais de mídia e comunicação. As pessoas irão utilizar mais streaming, vídeos, podcasts, notícias online e redes sociais. Então, o que as marcas devem pensar é em como facilitar esse acesso e chamar a atenção do consumidor. </p>

              <p>72% da população afirma que o novo coronavírus já impacta seu dia a dia, com isso, garantir que a experiência do usuário ou cliente dentro das plataformas seja a melhor possível deve ser uma prioridade. Otimizar aplicativos, criar sites responsivos, implantar call centers e contato por WhatsApp pode fazer toda a diferença no alcance do produto ou serviço. </p>

              <p>O momento é crítico e as emoções ficam exacerbadas, isso faz com que as pessoas se lembrem mais daquilo que as fez bem, ou seja, as marcas lembradas serão aquelas que impactaram positivamente a vida das pessoas. Se esse impacto durar, melhor ainda, pois essa pandemia mostrou que é possível atuar coletivamente e que, assim, os resultados são melhores e mais sustentáveis e tudo indica que a humanidade continuará seguindo esse caminho. </p>

              <p>Fonte: Kantar</p>

              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News8;
