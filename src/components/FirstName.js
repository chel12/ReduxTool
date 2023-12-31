import React from 'react';
//нужно получить данные из стора
import { useSelector } from 'react-redux';

const FirstName = () => {
	const name = useSelector((state) => state.user.firstName); //хук принимает колбек
	return <div className="font-bold">{name}</div>;
};

export default FirstName;
