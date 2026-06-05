import { types } from './types';

export function loadTodosRequest() {
  return { type: types.LOAD_TODOS_REQUEST };
}

export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, payload: { todos } };
}

export function addTodoRequest(title) {
  return { type: types.ADD_TODO_REQUEST, payload: { title } };
}

export function addTodoSuccess(todo) {
  return { type: types.ADD_TODO_SUCCESS, payload: { todo } };
}

export function deleteTodoRequest(id) {
  return { type: types.DELETE_TODO_REQUEST, payload: { id } };
}

export function deleteTodoSuccess(id) {
  return { type: types.DELETE_TODO_SUCCESS, payload: { id } };
}

export function todosFailure() {
  return { type: types.TODOS_FAILURE };
}