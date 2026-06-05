import { types } from './types';

// O estado inicial define como a aplicação começa (deslogada e sem token)
const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Quando a página de login disparar o pedido
    case types.LOGIN_REQUEST:
      return { 
        ...state, 
        loading: true,
        error: null,
      };
    
    // Quando o Saga responder com o token (mesmo que seja o mocado)
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        signed: true,
        loading: false,
      };

    // Caso ocorra algum erro na simulação ou na API real
    case types.LOGIN_FAILURE:
      return { 
        ...state, 
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}