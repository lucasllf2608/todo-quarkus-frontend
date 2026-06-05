import { types } from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOAD_TODOS_REQUEST:
      return { ...state, loading: true };

    case types.LOAD_TODOS_SUCCESS:
      return { ...state, loading: false, data: action.payload.todos };

    case types.ADD_TODO_SUCCESS:
      return { ...state, data: [...state.data, action.payload.todo] };

    case types.DELETE_TODO_SUCCESS:
      return { 
        ...state, 
        data: state.data.filter(todo => todo.id !== action.payload.id) 
      };

    case types.TODOS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
}