import Axios from 'axios';

const url = 'http://localhost:8080/api/todo';

export const fetchAll = async () => {
	let response = await Axios.get(url);
	return response.data;
};

export const toggleTodo = id => Axios.post(`${url}/toggle/${id}`);

export const addTodo = action =>
	Axios.post(url, `action=${action}`, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

export const removeTodo = id => Axios.delete(`${url}/${id}`);
