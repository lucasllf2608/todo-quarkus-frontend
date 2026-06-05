import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { types } from './types';
import { loadTodosSuccess, addTodoSuccess, deleteTodoSuccess, todosFailure } from './actions';

// Simulação de chamada de API para o Quarkus
function* loadTodos() {
  try {
    yield delay(1000); // Simulando delay de rede
    const mockData = [
      { id: 1, title: 'Estudar React e Redux', completed: false },
      { id: 2, title: 'Ajustar API no Quarkus', completed: true },
    ];
    yield put(loadTodosSuccess(mockData));
  } catch (err) {
    yield put(todosFailure());
  }
}

function* addTodo({ payload }) {
  try {
    const { title } = payload;
    // Aqui no futuro você usará: yield call(api.post, '/todos', { title });
    const newTodo = { id: Math.random(), title, completed: false };
    yield put(addTodoSuccess(newTodo));
  } catch (err) {
    yield put(todosFailure());
  }
}

export default all([
  takeLatest(types.LOAD_TODOS_REQUEST, loadTodos),
  takeLatest(types.ADD_TODO_REQUEST, addTodo),
]);