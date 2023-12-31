//слайс для первой части приложения
//слайс отвечает за инициализацию стейта
import { createSlice } from '@reduxjs/toolkit';
//состояние слайса
const initialState = {
	firstName: '',
	lastName: '',
};
//делаем слайс
export const userSlice = createSlice({
	//опции слайса
	name: 'user', //имя редьюсера
	initialState, //изначальное состояние
	reducers: {
		//обьекты функции для управление состоянием
		setFirstName: (state, action) => {
			//экшен
			//state это наш initialState, 2ой параметр action
			state.firstName = action.payload; //экшен принесет данные из UI через payload
		},
		setLastName: (state, action) => {
			//экшен
			//state это наш initialState, 2ой параметр action
			state.lastName = action.payload; //экшен принесет данные из UI через payload
		},
	},
});

//экспорт экшенов
export const { setFirstName, setLastName } = userSlice.actions;
//и экспорт редьюсера
export default userSlice.reducer;
