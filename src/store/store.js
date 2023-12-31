import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import todoSlice from '../features/todo/todoSlice';
export const store = configureStore({
	//редьюсер
	//для стейта slice используется, который отвечает за свою часть приложения
	reducer: {
		user: userSlice,
		todo: todoSlice,
	},
});
