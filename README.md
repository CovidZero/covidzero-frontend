# Repositório para centralizar frontend do CovidZero
[Protótipo em andamento](https://www.figma.com/file/hy6XetQQ1cuq1RaPrd5MhN/CovidZero?node-id=0%3A1)


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
  export const ACTION_TYPE = 'ACTION_TYPE';
  export const ANOTHER_ACTION_TYPE = 'ANOTHER_ACTION_TYPE';

  export const actionName = () => {
     return { type: ACTION_TYPE }
  }

  export const anotheActionName = (payload) => {
     return { type: ANOTHER_ACTION_TYPE, payload }
  }
  ```
  
  - Reducers
  ```javascript
  import { ACTION_TYPE, ANOTHER_ACTION_TYPE } from "../actions";

  const initialState = {
    variable: {}
  }

  export const nameReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_TYPE:
        return { ...state, variable: action.data };
      case ANOTHER_ACTION_TYPE:
        return { ...state, variable: variable.data };
      default:
        return state;
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
