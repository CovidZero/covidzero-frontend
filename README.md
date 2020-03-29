# CovidZero React frontend

[Protótipo em andamento](https://www.figma.com/file/hy6XetQQ1cuq1RaPrd5MhN/CovidZero?node-id=0%3A1)

## Getting Started (Começando)
Assim que clonado o repositório, rodar na base do projeto
``` yarn ``` ou ```npm install```.

Para rodar a aplicação:
```
  yarn start
```

ou
```
  npm start
```

### json-server

Os dados da listagem das cidades para teste, por enquanto está sendo feita através do json-server. Ele basicamente roda uma api fake.
Para saber mais: [json-server](https://github.com/typicode/json-server).

Assim que instalado basta rodar:
```
  json-server --watch db.json --port 5000
```

## React-Redux

Para utilização do Redux foi criado uma estrutura de pastas para as actions, reducers e types. Cada página (rota) deverá ter, se necessário, as pastas actions, reducers. A pasta actions irá conter um arquivo com a definição dos types e das actions em si. A pasta reducers irá conter um arquivo com a configuração do state para manipulaçao da store do redux;

### Estrutura de pastas

```javascript
- pages/pageName/actions/index.js
- pages/pageName/reducers/index.js
- pages/pageName/index.js //Componente principal
- pages/pageName/components/... //Demais componentes auxiliares
```

Exemplos:

- Types e actions:

```javascript
export const ACTION_TYPE = "ACTION_TYPE";
export const ANOTHER_ACTION_TYPE = "ANOTHER_ACTION_TYPE";

export const actionName = () => {
  return { type: ACTION_TYPE };
};

export const anotheActionName = payload => {
  return { type: ANOTHER_ACTION_TYPE, payload };
};
```

- Reducers

```javascript
import { ACTION_TYPE, ANOTHER_ACTION_TYPE } from "../actions";

const initialState = {
  variable: {}
};

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return { ...state, variable: action.data };
    case ANOTHER_ACTION_TYPE:
      return { ...state, variable: variable.data };
    default:
      return state;
  }
};
```

## Redux-Saga

Para se utilizar do Redux-Saga é precisar criar uma pasta no seu componente chamada 'sagas', criar um arquivo e então você poderá usar as generator functions.

- Exemplo:

```javascript
import { put } from "redux-saga/effects";
import http from "~/utils/config/http";

import { action } from "../actions";

export function* method({ data }) {
  try {
    const resp = yield http.get(`/api/${data}`);
    yield put(action(resp.data));
  } catch (error) {
    //error
  }
}
```

## Hooks

Com os hooks que o redux disponibiliza, podemos acessar e manipular a store do redux da seguinte forma:

- Acessar a store:

```javascript
import { useSelector, useDispatch } from "react-redux";
...
const { someVariable } = useSelector(state => state.nameReducer);
```

- Dispatch de uma action:

```javascript
const dispatch =  useDispatch();
...
dispatch(action());
```

## Import

Para importar um componente/funçao a partir da pasta `src`, em qualquer nível de pasta que você esteja, utilize da seguinte forma:

```jsx
// example
import something from "~/pages/something";
```

## i18n (Só funciona em Functional Components)

Para utilizar a `i18n`, siga o exemplo:

```jsx
import { useTranslation } from "react-i18next"; // importe essa função

// desestruture essa função

const [t, i18n] = useTranslation();
```

A função `t`, é a função que substitui as palavras pelos indices do Dicionário, localizado em `/public/locales/pt` ou `/en`, ela recebe uma string como parâmetro, e você pode acessar as palavars do seu Dicionário Json como se fosse um Objeto no javascript.

Ex:

```json
// /public/locales/pt/tranaslation.json

{
  "titulo": {
    "primeiro": "Este é um Título",
    "segundo": "Este ṕe outro título"
  }
}
```

```jsx
return (
  <h1>{t('titulo.primeiro')}</h1>
  <h1>{t('titulo.segundo')}</h1>
)
```

**É importante salientar em relação aos dicionários, o JSON propriamente dito do Dicionário para ambas as Linguagens devem ter a mesma estrutura.**

Já a função `i18n` é utilizada pra fazer a troca da linguagem, também para verificar qual é a linguagem ativa no momento e etc.

ex:

```jsx
import React from "react";
import TestReducer from "./pages/TestReducer";
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation();

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <label>{t("title")}</label>
      <div>
        <button type="button" onClick={() => handleChangeLang("pt")}>
          PT-BR
        </button>
        <button type="button" onClick={() => handleChangeLang("en")}>
          EN
        </button>
      </div>
      <TestReducer />
    </div>
  );
}

export default App;
```

## Componentes do Uikit

Os componentes que componhe os UiKit (inputs, selected, containers e etc), que são compartilhados pela aplicação, estão localizados na pasta **./pages/UiKit/components**.

Acessando a rota **/uikit** temos a implementação de cada componente.

## Grid layout

Adicionado ao projeto o grid layout utilizando o projeto [React Layout Grid](https://github.com/material-components/material-components-web-react/tree/master/packages/layout-grid).

