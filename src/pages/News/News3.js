import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header } from "~/components";
import ShareIcon from "~/assets/icons/share.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News3 = props => {
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
      <Content>
        <Title>CovidZero - Por trás do relatório que pôs os EUA e o Reino Unido em ação contra o vírus COVID-19</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image"
                  src={require("~/assets/images/Por_trás_do_relatório_que_pôs_os_EUA_e_o_Reino_Unido_em_ação_contra_o_vírus_COVID-19.jpg")}
                />
                <div className="news-item-title">Por trás do relatório que pôs os EUA e o Reino Unido em ação contra o vírus COVID-19</div>
              </div>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info">{`Publicado por: Mark Landler e Stephen Castle`} </div>
            </Cell>
            <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2}>
              <div className="news-info news-date">{`17/03/2020`}</div>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-info news-content">
                <p>Não eram tanto os números, por mais assustadores que fossem, como os que os denunciavam: Imperial College London. </p>
                <p>LONDRES - Quando Boris Johnson estava em campanha para que a Grã-Bretanha deixasse a União Europeia em 2016 - um caminho que muitos especialistas alertaram que terminaria em desastre para o país - um de seus aliados próximos, Michael Gove, declarou que “as pessoas neste país tiveram número suficiente de especialistas. "</p>
                <p>Agora, Gove e Johnson estão liderando o governo britânico, que enfrenta a calamidade do coronavírus, e Johnson, agora o primeiro ministro, insiste que o processo está sendo guiado por especialistas. O problema é que esses especialistas muitas vezes podem discordar entre si ou mudar de ideia sobre o curso de ação correto. </p>
                <p>Essa bagunça vai e vem em exibição vívida esta semana com a publicação de um novo relatório surpreendente sobre o vírus de uma equipe do Imperial College em Londres. O relatório, que alertou que uma propagação descontrolada da doença poderia causar 510.000 mortes na Grã-Bretanha, desencadeou uma mudança repentina na resposta relativamente relaxada do governo ao vírus. </p>
                <p>Autoridades americanas disseram que o relatório, que projetava 2,2 milhões de mortes nos Estados Unidos a partir de tal disseminação, também influenciou a Casa Branca a fortalecer suas medidas para isolar membros do público. </p>
                <p>O Imperial College aconselhou o governo em sua resposta a epidemias anteriores, incluindo SARS, gripe aviária e gripe suína. Com um trabalho em conjunto com a Organização Mundial da Saúde e uma equipe de 50 cientistas, liderada por um proeminente epidemiologista, Neil Ferguson, a Imperial é tratada como uma espécie de padrão-ouro, seus modelos matemáticos alimentando diretamente as políticas do governo. </p>
                <p>Mas especialistas externos apontaram que as conclusões alarmantes do relatório - que o vírus sobrecarregaria hospitais e que os governos não tinham escolha a não ser impor políticas radicais de bloqueio - foram feitas em relatórios anteriores sobre coronavírus ou em sites de mídia social dedicados ao surto. </p>
                <p>"Muito disso não é o que eles dizem, mas quem diz", disse Devi Sridhar, diretor do programa global de governança da saúde da Universidade de Edimburgo. "Neil Ferguson tem uma enorme quantidade de influência." </p>
                <p>Os especialistas observaram que o Imperial College fazia parte do grupo consultivo da estratégia agora abandonada do governo, que minimizava o distanciamento social radical e aceitava que a infecção se espalhasse pela população. A teoria é que isso criaria a chamada "imunidade de rebanho", para que o público fosse mais resistente diante de uma segunda onda de infecções no próximo inverno. </p>
                <p>Mas essa estratégia, observou o relatório, levaria a uma inundação de pacientes gravemente doentes em um país sem leitos suficientes . Ao invés disso foi afirmado que o Reino Unido deve realizar uma “repressão”, realizando bloqueios muito mais rigorosos, como o fechamento de escolas e a quarentena de infectados e seus familiares. Assim, reduzindo o número de casos e diminuindo o fluxo de pacientes em um período de pico, permitindo que os hospitais lidassem melhor com esta situação crítica. </p>
                <p>Dr. Ferguson tem sido sincero ao afirmar que o relatório chegou a novas conclusões por causa dos dados mais recentes da Itália, que registraram uma taxa crescente de infecções, inundando hospitais e forçando médicos a tomar decisões agonizantes sobre quem tratar. </p>
                <p>"O Reino Unido lutou nas últimas semanas para pensar em como lidar com esse surto a longo prazo", disse Ferguson em uma entrevista na segunda-feira, logo após o relatório ser divulgado. "Com base em nossas estimativas e de outras equipes, não há realmente outra opção a não ser seguir os passos e suprimir a China".</p>
                <p>O relatório acrescentou que "essa conclusão foi alcançada apenas nos últimos dias, com o refinamento das estimativas da provável demanda de UTI devido ao COVID-19 com base na experiência na Itália e no Reino Unido".</p>
                <p>Mas outros especialistas disseram que a carga sobre os hospitais era clara desde o surto original em Wuhan, na China. Lancet, a revista médica britânica, publicou um artigo em janeiro, com base no estudo de um pequeno grupo de pacientes, que descobriu que um terço das pessoas tinha que ser admitido em unidades de terapia intensiva. </p>
                <p>"Não posso deixar de sentir raiva de que demorou quase dois meses para os políticos e até 'especialistas' entenderem a escala do perigo da SARS-CoV-2", disse Richard Horton, editor-chefe da Lancet no Twitter - "Esses perigos estavam claros desde o começo." </p>
                <p>Alguns disseram que os governos devem tratar as projeções do relatório sobre políticas de supressão com a mesma cautela. Ele afirma que medidas de distanciamento social podem ter que ser impostas por 18 meses ou mais, pelo menos intermitentemente, até que uma vacina seja desenvolvida e testada. Mas o relatório reconhece que isso é incerto, dada a possibilidade de tratamentos com drogas e o mistério de como o vírus é transmitido. </p>
                <p>"Estamos todos usando o manual da gripe pandêmica de 1918", disse Sridhar. "Mas estamos em uma posição diferente da de 1918. Estamos em 2020." </p>
                <p>Após dias de confusão sobre a sabedoria de incentivar a "imunidade do rebanho", o governo procurou minimizar a disputa, argumentando que essa não era uma parte deliberada de sua estratégia, mas um subproduto dela. Mas mudou para uma política de incentivo às pessoas a não irem a bares, restaurantes, teatros ou museus. </p>
                <p>Na terça-feira, o principal conselheiro científico do governo, Sir Patrick Vallance, disse esperar que essas novas e mais rigorosas restrições durem meses - e que as autoridades teriam que monitorar com muito cuidado o que aconteceria quando fossem levantadas. </p>
                <p>As autoridades britânicas reconhecem que seu serviço de saúde enfrenta um momento de verdade. Todas as operações não urgentes na Inglaterra serão adiadas por pelo menos três meses, a partir de 15 de abril, para liberar 30.000 leitos para ajudar a combater o coronavírus. </p>
                <p>O Reino Unido fica atrás de outras nações europeias no fornecimento de ventiladores. Estão em andamento planos para aumentar seus números de mais de 8.000 para 12.000, embora as autoridades relutem em prometer que mesmo isso é suficiente. </p>
                <p>Sublinhando a mudança de tom, o chefe de finanças da Grã-Bretanha, Rishi Sunak, anunciou um gigantesco estímulo fiscal para recuperar as empresas britânicas instáveis e tentar conter a perda de empregos. O pacote, no valor de 330 bilhões de libras, ou US $ 422 bilhões, incluirá empréstimos e incentivos fiscais apoiados pelo governo para empresas e uma quebra de três meses nos pagamentos de hipotecas para proprietários carentes. </p>
                <p>"Em tempos de paz, nunca enfrentamos uma luta econômica como essa", disse Sunak, que também prometeu apoio a aeroportos e companhias aéreas nos próximos dias, depois que os britânicos foram desaconselhados a todas as viagens não essenciais. </p>
                <p>Johnson sugeriu na terça-feira que as escolas poderão fechar em breve. Mas ele ainda enfrenta críticas por falta de clareza, incluindo sua decisão de instar as pessoas a evitar bares e restaurantes, mas não a ordenar seu fechamento. De fato, o governo agora pretende equilibrar as leis temporariamente aplicadas para permitir que os bares fiquem abertos e produzam comida para viagem. </p>
                <p>Para a vergonha de Johnson, um dos que prometeu visitar o pub local era seu próprio pai, Stanley Johnson. </p>
                <p>Fonte: <a href="https://www.nytimes.com/2020/03/17/world/europe/coronavirus-imperial-college-johnson.html?utm_source=covidzero.com.br">New York Times</a></p>
              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News3;