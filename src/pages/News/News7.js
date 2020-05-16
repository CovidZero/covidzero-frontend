import React from "react";
import history from "~/services/history";
import { useTranslation } from "react-i18next";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import { Header,SocialShare } from "~/components";
import Notification from "~/assets/icons/bell.svg";
import ArrowLeft from "~/assets/icons/arrow-left.svg";
import { Content, Title } from "./styles";

const News7 = props => {
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
        <Title>O mercado brasileiro e as mudanças no consumo</Title>
        <Grid className="news-item-header">
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-item-header-image">
                <img
                  className="news-item-image"
                  src={require("~/assets/images/o-mercado-brasileiro-e-as-mudanças-no-consumo.jpg")}
                />
                <div className="news-item-title">O mercado brasileiro e as mudanças no consumo</div>
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
              <div className="news-info news-date">{`16/05/2020`}</div>
            </Cell>
          </Row>
        </Grid>
        <SocialShare></SocialShare>
        <Grid>
          <Row>
            <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
              <div className="news-info news-content">
                <p>Entender como funciona o consumo neste período é importante, pois ajudará a programar os próximos passos. O mundo já passou por outras crises e as enfrentou utilizando as ferramentas disponíveis na época. Hoje, vivemos uma era digital, onde produtos e serviços já vinham sendo adaptados a essa nova realidade e agora tiveram um empurrãozinho do que se caracterizou como um “novo normal”. </p>
                <p>Um dos principais pontos a ser discutido foi a diminuição dos gastos de toda população. Num primeiro momento, quando começou a fase de isolamento social, as pessoas correram para abastecer a despensa - uma pesquisa realizada pela Kantar estima que elas optaram por itens não perecíveis e embutidos. Produtos como linguiça, por exemplo, saíram mais nas primeiras semanas de isolamento. </p>
                <p>Após essa fase de abastecimento - que se caracterizou por uma diminuição de consumo de produtos para higiene pessoal, como creme dental, absorvente e desodorantes - os gastos tiveram uma queda. A população começou a eleger prioridades, comprar apenas produtos de necessidade básica e se preparar para o que estaria por vir. </p>
                <h2>Os hábitos diários e as mudanças trazidas pelo isolamento</h2>
                <p>Com o fechamento de bares e restaurantes, cresce o mercado de delivery e as pessoas começam a usar mais aplicativos de entrega de mercadorias, como Rappi, Uber Eats e iFood. Hoje em dia, existem apps que entregam de tudo, e não mais apenas comida, mas o foco aqui é a alimentação. Pesquisas mostram que 53% das pessoas pediram delivery entre 2 a 3 vezes na última semana de março - início do isolamento social. </p>
                <p>Se no final de março, 23% da população já alegava estar trabalhando em home office, é possível que agora esse número tenha crescido significativamente, considerando que todos estejam cumprindo as normas da OMS. </p>
                <p>Aqui no Brasil, estamos vivendo um cenário que já foi vivido por outros países, onde o novo coronavírus chegou primeiro, e podemos extrair algumas previsões do que pode nos esperar, pensando em mercado e consumo. No Reino Unido, 71% das marcas líderes ganharam participação em março deste ano, ou seja, dentro do cenário de pandemia. Isso significa que aqui, caso as marcas saibam se posicionar, podem aumentar sua relevância diante dos consumidores. </p>
                <p>Uma curiosidade é que, por terem que passar mais tempo dentro de casa e assumir novos hábitos, as pessoas buscam encontrar novas maneiras de utilizar esse tempo livre. Na Espanha, por exemplo, o consumo de snacks cresceu consideravelmente no início do isolamento. 74% dos moradores do país ibérico passaram a fazer mais lanches e comer produtos como biscoitos, salgadinhos e chocolates como forma de se distrair.</p>
                <h2>O que esperar do pós-quarentena? </h2>
                <p>O país já vinha em uma fase de lares endividados e rendas comprometidas antes da pandemia, um estudo aponta que o desemprego pode até dobrar após essa crise. A taxa atual de desemprego no país é de 11,6%, e ela pode chegar a 23,8% quando a crise do COVID-19 passar. </p>
                <p>É fato que todos os países enfrentarão uma recessão pós-pandemia, mas especialistas acreditam que haverá uma recuperação e ela se dará por categorias de produtos/serviços. Algumas se manterão no mesmo nível de consumo que alcançaram durante a crise do novo coronavírus, os produtos de limpeza e para lavar as mãos mesmo tiveram um crescimento no isolamento e permanecerão assim. </p>
                <p>Já o grupo de produtos usados para cozinhar - temperos e outros ingredientes -, que também teve um crescimento, cairá. As pessoas tiveram que fazer sua própria comida em casa e alguns até se aventuraram como chefs, criando receitas de guloseimas e sobremesas. Obviamente, após voltarem ao trabalho in loco, essa demanda diminuirá e seu consumo também. </p>
                <p>Outros produtos voltarão aos níveis anteriores de consumo e outros terão uma recuperação mais lenta, como é o caso de itens não essenciais de cuidados com a pele e cabelo, por exemplo. </p>
                <h2>O que querem fazer as pessoas quando a quarentena acabar? </h2>
                <p>A ansiedade para a retomada da normalidade é natural e esperada, as pessoas querem voltar a fazer coisas simples do dia a dia. A palavra rotina remete a algo monótono e pode ser visto como motivo de reclamação, mas muitos sentem falta da vida que levavam antes da pandemia. Pensando na primeira coisa que as pessoas vão fazer assim que isso acabar, 65% dos entrevistados dizem que querem jantar fora, 58% visitar lojas ou shoppings e 45% viajar. </p>
                <p>Um dado interessante coletado nesta pesquisa é em relação aos novos hábitos que as pessoas terão quando a crise acabar. A população se tornará mais conservadora, passará a economizar mais e se preocupar mais com coisas que realmente importam, como desfrutar de prazeres instantâneos e aproveitar mais a família e amigos. </p>
                <p>Parece que o ser humano mudará radicalmente em relação à saúde também, 83% alegam que vão comprar e estocar máscaras e produtos desinfetantes como prevenção e terão mais cuidado com a higiene pessoal e também de suas residências. </p>
                <h2>Como lidar com o “novo normal”? </h2>
                <p>O que podemos tirar de lição dessa pandemia é que existe um novo normal, uma nova realidade sendo vivida por todos que tiveram que se adaptar a ela. Esse novo tempo chega com as pessoas priorizando o essencial, criando novos hábitos de saúde - tendo um olhar mais atento a isso. Com a redução da renda, a população irá priorizar apenas o extremamente necessário, tanto no consumo quanto nas relações e pequenos prazeres. </p>
                <p>Comércio em geral e indústrias, após a queda, verão sua recuperação aos poucos. O que se pode fazer é, por ora, garantir o abastecimento, otimizar os canais de venda e responder a essas novas necessidades do consumidor, tranquilizando a população de que não haverá escassez ou grandes rupturas no fornecimento. Nos meses de maio e junho, quando provavelmente haverá uma lenta retomada, a alternativa é adaptar estratégias à nova normalidade e, em julho, com o impacto econômico possivelmente no auge, revisar a abordagem de marketing, custos e receita, considerando um cenário menos favorável para a economia brasileira. </p>
                <p>Fonte: <a href="#">Kantar</a></p>
              </div>
            </Cell>
          </Row>
        </Grid>
      </Content>
    </>
  );
};

export default News7;