//слайс для первой части приложения
//слайс отвечает за инициализацию стейта
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//состояние слайса
//https://jsonplaceholder.typicode.com/posts

const initialState = {
	posts: [],
};
//делаем слайс

export const getPosts = createAsyncThunk(
	//1 формируется из имени слайс/имя функции. 2
	'posts/getPosts',
	async (_, { rejectWithValue, dispatch }) => {
		//rejectWithValue для доступа к fullfield,pending,rejected
		//1 аргумент payLoad, 2 набор опшинов
		const res = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		dispatch(setPosts(res.data));
	}
);

export const deletePostById = createAsyncThunk(
	'posts/deletePostById',
	async (id, { rejectWithValue, dispatch }) => {
		await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
		dispatch(deletePost(id));
	}
);

export const postSlice = createSlice({
	//опции слайса
	name: 'posts', //имя редьюсера
	initialState, //изначальное состояние
	reducers: {
		setPosts: (state, action) => {
			state.posts = action.payload;
		},
		deletePost: (state, action) => {
			state.posts = state.posts.filter(
				(post) => post.id !== action.payload
			);
		},
	},
	extraReducers: {
		//!
		[getPosts.fulfilled]: () => console.log('getPosts:fullfield'), // при успешном запросе
		[getPosts.pending]: () => console.log('getPosts:pending'), // при начале запроса
		[getPosts.rejected]: () => console.log('getPosts:rejected'), // при ошибке
		//!
		[deletePostById.fulfilled]: () =>
			console.log('deletePostById: fullfield'), // при успешном запросе
		[deletePostById.pending]: () => console.log('deletePostById: pending'), // при начале запроса
		[deletePostById.rejected]: () =>
			console.log('deletePostById: rejected'), // при ошибке
		//!
	},
});

//экспорт экшенов
export const { setPosts, deletePost } = postSlice.actions;
//и экспорт редьюсера
export default postSlice.reducer;
