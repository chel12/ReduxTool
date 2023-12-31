//слайс для первой части приложения
//слайс отвечает за инициализацию стейта
import { createSlice } from '@reduxjs/toolkit';
//состояние слайса
const initialState = {
	todos: [],
};
//делаем слайс
export const todoSlice = createSlice({
	//опции слайса
	name: 'todos', //имя редьюсера
	initialState, //изначальное состояние
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		toggleCompletedTodo: (state, action) => {
			const toggleTodo = state.todos.find(
				(todo) => todo.id === action.payload
			);
			toggleTodo.completed = !toggleTodo.completed;
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
	},
});

//экспорт экшенов
export const { addTodo, toggleCompletedTodo, removeTodo } = todoSlice.actions;
//и экспорт редьюсера
export default todoSlice.reducer;
