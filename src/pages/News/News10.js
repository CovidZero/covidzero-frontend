import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News10 = props => {
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
        <Title>Como manter a eficácia da mídia durante a pandemia</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image" alt="Como manter a eficácia da mídia durante a pandemia"
                  src={require("~/assets/images/como-manter-a-eficacia-da-midia-durante-a-pandemia.jpg")}
                />
                <div className="news-item-title">Como manter a eficácia da mídia durante a pandemia</div>
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
              <p>O mundo já viveu, ao longo dos séculos, outras pandemias e, de maneiras diferentes, conseguiu se adaptar e superar todas elas. Um exemplo de uma pandemia ocorrida no século XIV foi a peste bubônica, também conhecida como peste negra. Ela matou entre 75 e 200 milhões de pessoas por toda Europa, reduzindo sua população a um terço. </p>

              <p>Outra grande pandemia que assolou o mundo foi a gripe espanhola, que infectou um terço da população mundial e matou entre 40 e 50 milhões de pessoas em 1918. Morreu mais gente em decorrência dessa gripe do que em toda a Primeira Guerra Mundial. Claro que estamos falando de um tempo em que não tínhamos a tecnologia de hoje, a informação não chegava com tanta facilidade e a ciência não havia avançando aos níveis que vemos no século XXI. </p>

              <p>Hoje, estamos vivendo uma pandemia, a Covid-19, dentro de um cenário científico e tecnologicamente evoluído. Sabemos em tempo real o número de infectados em todo o planeta e também quais vacinas estão em andamento. Isso nos dá mais esperanças de cura e possibilidades de retorno acelerado ao antigo normal - ou ao que conhecíamos como normal. </p>

              <h2>A mídia out of home perdeu relevância, mas há alternativas</h2>
              <p>Diante de todas essas novidades, podemos citar, também, mudanças dentro da mídia e em como a publicidade e os investimentos nela contidos precisam se adaptar para continuarem eficientes. Alguns tipos de publicidade não fazem muito sentido durante esse período de isolamento social, como é o caso da mídia OOH (out of home), por exemplo. Se os cinemas não estão funcionando e o público não terá acesso às salas de projeção, não interessa às marcas investir em publicidade para as telonas. </p>

              <p>Publicidades ao ar livre também perdem o seu efeito, como outdoors, mídia indoor - aquelas TVs de sala de espera ou displays em aeroportos e estações de metrô, por exemplo -, além de pôsteres e outros tipos de anúncios visíveis em vias públicas. Uma solução viável é utilizar pontos de acesso às farmácias e aos supermercados, que são lugares onde as pessoas continuam precisando ir. </p>

              <p>A relevância de patrocínios também diminui, pois, eventos como feiras, jogos e shows não estão mais ocorrendo in loco. No entanto, é possível explorar alternativas. Uma delas é realocar esses recursos para eventos virtuais, como lives, que têm sido muito assistidas, ou e-sports - esportes eletrônicos, uma nova tendência no mundo digital. </p>

              <h2>Mantenha o foco nos canais de mídia internos</h2>
              <p>Devemos considerar que os canais domésticos têm mais relevância dentro desse panorama de uma pandemia com isolamento social. Pesquisas mostram que as pessoas têm assistido mais TV e se conectado mais com a mídia online. Canais de streaming e VoD (vídeos on demand), redes sociais, pay-TV e a própria TV aberta são recursos que têm visto sua audiência aumentar significativamente. </p>

              <p>Uma maneira de extrair o máximo desses canais é conhecendo essa nova persona, analisando esses novos grupos-alvo que se formaram a partir da impossibilidade de circular normalmente pela cidade. A partir dessa avaliação, é possível investir com mais assertividade numa publicidade que irá gerar maior impacto na população. </p>

              <p>É importante, também, conhecer esses novos canais, como as pessoas interagem com eles e participar dessa interação, dessa discussão, e levar em consideração o relato ou opinião do consumidor. Vale salientar que não é preciso estar em todos os canais, é válido escolher com cuidado quais deles serão mais relevantes para o seu negócio. </p>
              <h2>Manter a marca forte contribuirá para superar a crise no período pós-pandemia</h2>
              <p>O momento é complicado, mas o trabalho de branding é essencial para manter a marca forte e contribuir com a recuperação e retorno do crescimento no pós-pandemia. Segundo uma pesquisa publicada pela Kantar no ano passado sobre a crise de 2008, marcas fortes se recuperaram nove vezes mais rapidamente. Isso significa que manter o poder da marca pode levar sua empresa a superar mais facilmente os impactos econômicos causados pela Covid-19. </p>

              <p>O que se pode extrair dessa análise é que os investimentos em publicidade e mídia precisam continuar acontecendo, mas dentro de uma estratégia bem elaborada e de acordo com o novo normal e os novos públicos-alvo. Deve haver um cuidado em como direcionar esses recursos, avaliando o que trará mais resultado nesse momento - a pesquisa sugere a mídia interna e online, porém o importante é prosseguir anunciando. </p>

              <p>Tudo isso fará com que as marcas ganhem força no mercado e possam ser mais facilmente lembradas pelo consumidor. Assim as chances de superar os impactos sofridos aumentam substancialmente e as empresas poderão ver o retorno desse investimento em mídia durante a pandemia e ter resultados positivos no pós-pandemia. </p>


              <p>Fonte: Kantar e BBC</p>

              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News10;
