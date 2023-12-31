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
	},
});

//экспорт экшенов
export const { addTodo } = todoSlice.actions;
//и экспорт редьюсера
export default todoSlice.reducer;
